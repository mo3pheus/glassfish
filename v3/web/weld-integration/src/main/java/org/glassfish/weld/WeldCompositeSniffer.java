/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright (c) 2009-2010 Oracle and/or its affiliates. All rights reserved.
 *
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common Development
 * and Distribution License("CDDL") (collectively, the "License").  You
 * may not use this file except in compliance with the License.  You can
 * obtain a copy of the License at
 * https://glassfish.dev.java.net/public/CDDL+GPL_1_1.html
 * or packager/legal/LICENSE.txt.  See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * When distributing the software, include this License Header Notice in each
 * file and include the License file at packager/legal/LICENSE.txt.
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

package org.glassfish.weld;

import java.io.IOException;
import java.util.Enumeration;

import org.glassfish.api.container.CompositeSniffer;
import org.glassfish.api.deployment.DeploymentContext;
import org.glassfish.api.deployment.archive.ReadableArchive;
import org.glassfish.javaee.core.deployment.ApplicationHolder;
import org.jvnet.hk2.annotations.Scoped;
import org.jvnet.hk2.annotations.Service;
import org.jvnet.hk2.component.Singleton;


/**
 * This sniffer determines if there are any beans.xml at the ear level.
 */
@Service(name = "weldCompositeSniffer")
@Scoped(Singleton.class)
public class WeldCompositeSniffer extends WeldSniffer implements CompositeSniffer {

    private static char SEPARATOR_CHAR = '/';
    private static final String JAR_SUFFIX = ".jar";
    private static final String META_INF_BEANS_XML = "META-INF" + SEPARATOR_CHAR + "beans.xml";

    public boolean handles(DeploymentContext context) {
        boolean isWeldApplication = false;
        ApplicationHolder holder = context.getModuleMetaData(ApplicationHolder.class);
        ReadableArchive appRoot = context.getSource();
        if ((holder != null) && (holder.app != null)) {
            isWeldApplication = scanLibDir(appRoot, holder.app.getLibraryDirectory(), context);
        }
        return isWeldApplication;
    }

    // This method returns true if at least one /lib jar is a Weld archive
    // A more thorough scan is done in WeldDeployer to extract all Weld archives
    // under the /lib directory.

    private boolean scanLibDir(ReadableArchive archive, String libLocation, DeploymentContext context) {
        boolean entryPresent = false;
        if (libLocation != null && !libLocation.isEmpty()) {
            Enumeration<String> entries = archive.entries(libLocation);
            while (entries.hasMoreElements() && !entryPresent) {
                String entryName = entries.nextElement();
                // if a jar in lib dir and not WEB-INF/lib/foo/bar.jar
                if (entryName.endsWith(JAR_SUFFIX) &&
                    entryName.indexOf(SEPARATOR_CHAR, libLocation.length() + 1 ) == -1 ) {
                    try {
                        ReadableArchive jarInLib = archive.getSubArchive(entryName);
                        entryPresent = isEntryPresent(jarInLib, META_INF_BEANS_XML);
                        jarInLib.close();
                        if (entryPresent) break;
                    } catch (IOException e) {
                    }
                }
            }
        }
        return entryPresent;
    }

    private boolean isEntryPresent(ReadableArchive archive, String entry) {
        boolean entryPresent = false;
        try {
            entryPresent = archive.exists(entry);
        } catch (IOException e) {
            // ignore
        }
        return entryPresent;
    }
}
