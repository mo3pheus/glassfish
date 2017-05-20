/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 1997-2017 Oracle and/or its affiliates. All rights reserved.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common Development
 * and Distribution License("CDDL") (collectively, the "License").  You
 * may not use this file except in compliance with the License.  You can
 * obtain a copy of the License at
 * https://oss.oracle.com/licenses/CDDL+GPL-1.1
 * or LICENSE.txt.  See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * When distributing the software, include this License Header Notice in each
 * file and include the License file at LICENSE.txt.
 *
 * GPL Classpath Exception:
 * Oracle designates this particular file as subject to the "Classpath"
 * exception as provided by Oracle in the GPL Version 2 section of the License
 * file that accompanied this code.
 *
 * Modifications:
 * If applicable, add the following below the License Header, with the fields
 * enclosed by brackets [] replaced by your own identifying information:
 * "Portions Copyright [year] [name of copyright owner]"
 *
 * Contributor(s):
 * If you wish your version of this file to be governed by only the CDDL or
 * only the GPL Version 2, indicate your decision by adding "[Contributor]
 * elects to include this software in this distribution under the [CDDL or GPL
 * Version 2] license."  If you don't indicate a single choice of license, a
 * recipient has the option to distribute your version of this file under
 * either the CDDL, the GPL Version 2 or to extend the choice of license to
 * its licensees as provided above.  However, if you add GPL Version 2 code
 * and therefore, elected the GPL Version 2 license, then the option applies
 * only if the new code is made subject to such option by the copyright
 * holder.
 */

package com.sun.enterprise.tools.verifier.tests.ejb.session;

import com.sun.enterprise.tools.verifier.Result;
import com.sun.enterprise.tools.verifier.Verifier;
import com.sun.enterprise.tools.verifier.tests.ComponentNameConstructor;
import com.sun.enterprise.tools.verifier.tests.ejb.EjbCheck;
import com.sun.enterprise.tools.verifier.tests.ejb.EjbTest;
import org.glassfish.ejb.deployment.descriptor.EjbDescriptor;
import org.glassfish.ejb.deployment.descriptor.EjbSessionDescriptor;

import java.util.logging.Level;

/**
 * Optionally implements the SessionSynchronization Interface test.  
 * The optional SessionSynchronization interface may be implemented only by 
 * a stateful Session Bean using container-managed transactions. The 
 * SessionSynchronization interface must not be implemented by a stateless 
 * Session Bean. 
 */
public class SessionSynchronizationInterface extends EjbTest implements EjbCheck {

    /**
     * Optionally implements the SessionSynchronization Interface test.  
     * The optional SessionSynchronization interface may be implemented only by 
     * a stateful Session Bean using container-managed transactions. The 
     * SessionSynchronization interface must not be implemented by a stateless 
     * Session Bean. 
     *   
     * @param descriptor the Enterprise Java Bean deployment descriptor
     *   
     * @return <code>Result</code> the results for this assertion
     */
    public Result check(EjbDescriptor descriptor) {

        Result result = getInitializedResult();
        ComponentNameConstructor compName = getVerifierContext().getComponentNameConstructor();

        if (descriptor instanceof EjbSessionDescriptor) {
            String stateType = ((EjbSessionDescriptor)descriptor).getSessionType();
            try {
                Class c = Class.forName(descriptor.getEjbClassName(), false, getVerifierContext().getClassLoader());
                // walk up the class tree
                do {
                    //Class[] interfaces = c.getInterfaces();
                    //for (int i = 0; i < interfaces.length; i++) {
                    for(Class interfaces : c.getInterfaces()) {
                        logger.log(Level.FINE, getClass().getName() + ".debug1",
                                new Object[] {interfaces.getName()});

                        if (interfaces.getName().equals("javax.ejb.SessionSynchronization") ) {
                            String transactionType = descriptor.getTransactionType();
                            if ((EjbSessionDescriptor.STATELESS.equals(stateType)) ||
                                    ((EjbSessionDescriptor.STATEFUL.equals(stateType))
                                            && EjbSessionDescriptor.BEAN_TRANSACTION_TYPE
                                            .equals(transactionType) )) {
                                addErrorDetails(result, compName);
                                result.failed(smh.getLocalString
                                        (getClass().getName() + ".failed",
                                        "Error: [ {0} ] does not properly implement the SessionSynchronization interface. " +
                                        " SessionSynchronization interface must not be implemented by a stateless Session Bean. " +
                                        "[ {1} ] is not a valid bean.",
                                        new Object[] {descriptor.getEjbClassName(),descriptor.getEjbClassName()}));
                                break;

                            }
                        }
                    }
                } while ((c=c.getSuperclass()) != null);

            } catch (ClassNotFoundException e) {
                Verifier.debug(e);
                result.addErrorDetails(smh.getLocalString
                        ("tests.componentNameConstructor",
                                "For [ {0} ]",
                                new Object[] {compName.toString()}));
                result.failed(smh.getLocalString
                        (getClass().getName() + ".failedException",
                                "Error: [ {0} ] class not found.",
                                new Object[] {descriptor.getEjbClassName()}));
            }
        }

        if (result.getStatus()!=Result.FAILED) {
            addGoodDetails(result, compName);
            result.passed(smh.getLocalString(getClass().getName() + ".passed",
                    "The required interface is properly implemented"));
        }
        return result;
    }
}
