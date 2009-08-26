package org.glassfish.tests.embedded.inplanted;

import org.glassfish.api.embedded.Server;
import org.glassfish.api.embedded.EmbeddedFileSystem;
import org.glassfish.tests.embedded.utils.EmbeddedServerUtils;
import org.junit.BeforeClass;
import org.junit.Assert;
import org.junit.Test;
import org.jvnet.hk2.component.Habitat;
import org.jvnet.hk2.component.Inhabitant;

import java.io.File;
import java.util.Collection;
import java.lang.reflect.Method;

/**
 * @author Jerome Dochez
 */
public class ExistingConfigurationTest {

    @Test
    public void setupServer() throws Exception {

        Server server=null;

        File f = EmbeddedServerUtils.getServerLocation();
        try {
            EmbeddedFileSystem.Builder efsb = new EmbeddedFileSystem.Builder();
            efsb.setInstallRoot(f);
            // find the domain root.
            f = EmbeddedServerUtils.getDomainLocation(f);
            f = new File(f, "config");
            f = new File(f, "domain.xml");
            Assert.assertTrue(f.exists());
            efsb.setConfigurationFile(f);
            server = EmbeddedServerUtils.createServer(efsb.build());

            Habitat habitat = server.getHabitat();
            Collection<Inhabitant<?>> vss = habitat.getInhabitantsByContract("com.sun.enterprise.config.serverbeans.VirtualServer");
            Assert.assertTrue(vss.size()>0);
            for (Inhabitant<?> vs : vss ) {
                Object virtualServer = vs.get();
                Method m = virtualServer.getClass().getMethod("getId");
                Assert.assertNotNull("Object returned does not implement getId, is it a virtual server ?", m);
                String id = (String) m.invoke(virtualServer);
                System.out.println("Virtual Server " + id);
                Assert.assertNotNull("Got a null virtual server ID", id);
            }
            Collection<Inhabitant<?>> nls = habitat.getInhabitantsByContract("com.sun.grizzly.config.dom.NetworkListener");
            Assert.assertTrue(nls.size()>1);
            for (Inhabitant<?> nl : nls) {
                Object networkListener = nl.get();
                Method m = networkListener.getClass().getMethod("getPort");
                Assert.assertNotNull("Object returned does not implement getPort, is it a networkListener ?", m);
                String port = (String) m.invoke(networkListener);
                System.out.println("Network Listener " + port);
                Assert.assertNotNull("Got a null networkListener port", port);
            }
        } catch(Exception e) {
            e.printStackTrace();
            throw e;
        } finally {
            EmbeddedServerUtils.shutdownServer(server);
        }
    }
}
