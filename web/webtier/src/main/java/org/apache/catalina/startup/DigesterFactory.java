/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 * 
 * Copyright 1997-2007 Sun Microsystems, Inc. All rights reserved.
 * 
 * Portions Copyright Apache Software Foundation.
 * 
 * The contents of this file are subject to the terms of either the GNU
 * General Public License Version 2 only ("GPL") or the Common Development
 * and Distribution License("CDDL") (collectively, the "License").  You
 * may not use this file except in compliance with the License. You can obtain
 * a copy of the License at https://glassfish.dev.java.net/public/CDDL+GPL.html
 * or glassfish/bootstrap/legal/LICENSE.txt.  See the License for the specific
 * language governing permissions and limitations under the License.
 * 
 * When distributing the software, include this License Header Notice in each
 * file and include the License file at glassfish/bootstrap/legal/LICENSE.txt.
 * Sun designates this particular file as subject to the "Classpath" exception
 * as provided by Sun in the GPL Version 2 section of the License file that
 * accompanied this code.  If applicable, add the following below the License
 * Header, with the fields enclosed by brackets [] replaced by your own
 * identifying information: "Portions Copyrighted [year]
 * [name of copyright owner]"
 * 
 * Contributor(s):
 * 
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


package org.apache.catalina.startup;

import java.net.URL;
import java.net.MalformedURLException;
import java.io.File;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.catalina.util.SchemaResolver;
import org.apache.jasper.xmlparser.ParserUtils;
import com.sun.org.apache.commons.digester.Digester;
import com.sun.org.apache.commons.digester.RuleSet;
import com.sun.enterprise.server.ServerContext;
import com.sun.logging.LogDomains;
import org.xml.sax.SAXNotRecognizedException;
import org.xml.sax.SAXNotSupportedException;

import org.jvnet.hk2.annotations.Service;
import org.jvnet.hk2.annotations.Inject;
import org.jvnet.hk2.component.PostConstruct;

/**
 * Wrapper class around the Digester that hide Digester's initialization details
 *
 * @author Jean-Francois Arcand
 */
@Service
public class DigesterFactory implements PostConstruct {

    @Inject
    ServerContext serverContext;

    /**
     * The path prefix for .xsd resources
     */
    private String schemaResourcePrefix;

    /**
     * The path prefix for .dtd resources
     */
    private String dtdResourcePrefix;

    public void postConstruct() {
        File root = serverContext.getInstallRoot();
        File libRoot = new File(root, "lib");
        File schemas = new File(libRoot, "schemas");
        File dtds = new File(libRoot, "dtds");

        setSchemaResourcePrefix(schemas.toURI().toString());
        setDtdResourcePrefix(dtds.toURI().toString());
    }

    /**
     * Create a <code>Digester</code> parser with no <code>Rule</code>
     * associated and XML validation turned off.
     */
    public Digester newDigester(){
        return newDigester(false, false, null);
    }

    
    /**
     * Create a <code>Digester</code> parser with XML validation turned off.
    ???* @param rule an instance of <code>Rule</code??? used for parsing the xml.
     */
    public Digester newDigester(RuleSet rule){
        return newDigester(false,false,rule);
    }


    /**
     * Sets the path prefix for .xsd resources
     */
    public void setSchemaResourcePrefix(String prefix) {
        schemaResourcePrefix = prefix;
    }

    /**
     * Sets the path prefix for .dtd resources
     */
    public void setDtdResourcePrefix(String prefix) {
        dtdResourcePrefix = prefix;
    }

    /**
     * Create a <code>Digester</code> parser.
     * @param xmlValidation turn on/off xml validation
     * @param xmlNamespaceAware turn on/off namespace validation
     * @param rule an instance of <code>Rule</code??? used for parsing the xml.
     */
    public Digester newDigester(boolean xmlValidation,
                                       boolean xmlNamespaceAware,
                                       RuleSet rule) {

        Digester digester = new Digester();
        digester.setNamespaceAware(xmlNamespaceAware);
        digester.setValidating(xmlValidation);
        digester.setUseContextClassLoader(true);
        
        String parserName = 
                digester.getFactory().getClass().getName();
        if (parserName.indexOf("xerces")!=-1) {
            digester = patchXerces(digester);
        }

        SchemaResolver schemaResolver = new SchemaResolver(digester);
        if (xmlValidation) {
            // Xerces 2.3 and up has a special way to turn on validation
            // for both DTD and Schema
            if (parserName.indexOf("xerces")!=-1) {
                turnOnXercesValidation(digester);
            } else {
                turnOnValidation(digester);
            }
        }
        registerLocalSchema(schemaResolver);
        
        digester.setEntityResolver(schemaResolver);
        if ( rule != null )
            digester.addRuleSet(rule);

        return (digester);
    }


    /**
     * Patch Xerces for backward compatibility.
     */
    private Digester patchXerces(Digester digester){
        // This feature is needed for backward compatibility with old DDs
        // which used Java encoding names such as ISO8859_1 etc.
        // with Crimson (bug 4701993). By default, Xerces does not
        // support ISO8859_1.
        try{
            digester.setFeature(
                "http://apache.org/xml/features/allow-java-encodings", true);
        } catch(ParserConfigurationException e){
                // log("contextConfig.registerLocalSchema", e);
        } catch(SAXNotRecognizedException e){
                // log("contextConfig.registerLocalSchema", e);
        } catch(SAXNotSupportedException e){
                // log("contextConfig.registerLocalSchema", e);
        }
        return digester;
    }


    /**
     * Utilities used to force the parser to use local schema, when available,
     * instead of the <code>schemaLocation</code> XML element.
     * @param schemaResolver
     *  The instance on which properties are set.
     * @return an instance ready to parse XML schema.
     */
    protected void registerLocalSchema(SchemaResolver schemaResolver) {

        if (schemaResourcePrefix != null) {
            // Java EE 5
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.JAVA_EE_SCHEMA_PUBLIC_ID_5,
                Constants.JAVA_EE_SCHEMA_PUBLIC_ID_5);
            // J2EE
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.J2eeSchemaPublicId_14,
                Constants.J2eeSchemaPublicId_14);
            // W3C
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.W3cSchemaPublicId_10,
                Constants.W3cSchemaPublicId_10);
            // JSP
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.JspSchemaPublicId_20,
                Constants.JspSchemaPublicId_20);
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.JSP_SCHEMA_PUBLIC_ID_21,
                Constants.JSP_SCHEMA_PUBLIC_ID_21);
            // TLD
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.TldSchemaPublicId_20,
                Constants.TldSchemaPublicId_20);
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.TLD_SCHEMA_PUBLIC_ID_21,
                Constants.TLD_SCHEMA_PUBLIC_ID_21);
            // web.xml    
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.WebSchemaPublicId_24,
                Constants.WebSchemaPublicId_24);
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.WebSchemaPublicId_25,
                Constants.WebSchemaPublicId_25);
            // Web Service
            register(
                schemaResolver,
                schemaResourcePrefix + Constants.J2eeWebServiceClientSchemaPublicId_11,
                Constants.J2eeWebServiceClientSchemaPublicId_11);
	} else {
            // Java EE 5
            register(schemaResolver,
                     Constants.JAVA_EE_SCHEMA_RESOURCE_PATH_5,
                     Constants.JAVA_EE_SCHEMA_PUBLIC_ID_5);
            // J2EE
            register(schemaResolver,
                     Constants.J2eeSchemaResourcePath_14,
                     Constants.J2eeSchemaPublicId_14);
            // W3C
            register(schemaResolver,
                     Constants.W3cSchemaResourcePath_10,
                     Constants.W3cSchemaPublicId_10);
            // JSP
            register(schemaResolver,
                     Constants.JspSchemaResourcePath_20,
                     Constants.JspSchemaPublicId_20);
            register(schemaResolver,
                     Constants.JSP_SCHEMA_RESOURCE_PATH_21,
                     Constants.JSP_SCHEMA_PUBLIC_ID_21);
            // TLD
            register(schemaResolver,
                     Constants.TldSchemaResourcePath_20,
                     Constants.TldSchemaPublicId_20);
            register(schemaResolver,
                     Constants.TLD_SCHEMA_RESOURCE_PATH_21,
                     Constants.TLD_SCHEMA_PUBLIC_ID_21);
            // web.xml    
            register(schemaResolver,
                     Constants.WebSchemaResourcePath_24,
                     Constants.WebSchemaPublicId_24);
            register(schemaResolver,
                     Constants.WebSchemaResourcePath_25,
                     Constants.WebSchemaPublicId_25);
            // Web Service
            register(schemaResolver,
                     Constants.J2eeWebServiceClientSchemaResourcePath_11,
                     Constants.J2eeWebServiceClientSchemaPublicId_11);
        }

        if (dtdResourcePrefix != null) {
            // TLD
            register(schemaResolver,
                     dtdResourcePrefix + "web-jsptaglibrary_1_1.dtd",  
                     Constants.TldDtdPublicId_11);
            register(schemaResolver,
                     dtdResourcePrefix + "web-jsptaglibrary_1_2.dtd",
                     Constants.TldDtdPublicId_12);
            // web.xml    
            register(schemaResolver,
                     dtdResourcePrefix + "web-app_2_2.dtd",
                     Constants.WebDtdPublicId_22);
            register(schemaResolver,
                     dtdResourcePrefix + "web-app_2_3.dtd",
                     Constants.WebDtdPublicId_23);
	} else {
            // TLD
            register(schemaResolver,
                     Constants.TldDtdResourcePath_11,  
                     Constants.TldDtdPublicId_11);
            register(schemaResolver,
                     Constants.TldDtdResourcePath_12,
                     Constants.TldDtdPublicId_12);
            // web.xml    
            register(schemaResolver,
                     Constants.WebDtdResourcePath_22,
                     Constants.WebDtdPublicId_22);
            register(schemaResolver,
                     Constants.WebDtdResourcePath_23,
                     Constants.WebDtdPublicId_23);
        }
    }


    /**
     * Load the resource and add it to the 
     */
    protected static void register(
            SchemaResolver schemaResolver,
            String resourceURL,
            String resourcePublicId) {

        // do we have this in our resources?
        URL url = DigesterFactory.class.getResource(resourceURL);

        // if not, is this already an URL?
        if (resourceURL != null) {
            try {
                url = new URL(resourceURL);
            } catch (MalformedURLException e) {
                return;
            }
        }

        // failed to resolve. Ignore.
        if(url==null)   return;

        schemaResolver.register(resourcePublicId , url.toString() );

    }


    /**
     * Turn on DTD and/or validation (based on the parser implementation)
     */
    protected void turnOnValidation(Digester digester){
        URL url = getClass().getResource(Constants.WebSchemaResourcePath_24);
        digester.setSchema(url.toString());     
    }


    /** 
     * Turn on schema AND DTD validation on Xerces parser.
     */
    protected void turnOnXercesValidation(Digester digester){
        try{
            digester.setFeature(
                "http://apache.org/xml/features/validation/dynamic",
                true);
            digester.setFeature(
                "http://apache.org/xml/features/validation/schema",
                true);
        } catch(ParserConfigurationException e){
            // log("contextConfig.registerLocalSchema", e);
        } catch(SAXNotRecognizedException e){
            // log("contextConfig.registerLocalSchema", e);
        } catch(SAXNotSupportedException e){
            // log("contextConfig.registerLocalSchema", e);
        }
    }

    protected static final Logger _logger = LogDomains.getLogger(LogDomains.WEB_LOGGER);
}
