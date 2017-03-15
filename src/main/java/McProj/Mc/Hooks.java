package McProj.Mc;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import McProj.drivers.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {

	public static WebDriver driver;
	
	@Before
	public void openBrowser() throws MalformedURLException, InterruptedException
	{
	
		MyUtils objMyUtils = new MyUtils();
		Properties prop = objMyUtils.loadFile("Config");
		String sdriverName = objMyUtils.getPropertiesValue("driverName", prop);		
		DriverFactory.initiateDriver(sdriverName);
		driver=DriverFactory.getDriver();
		driver.manage().window().maximize();
		//String sURL = objMyUtils.getPropertiesValue("url", prop);	
		/*String sUrlDelete = objMyUtils.getPropertiesValue("urlDelete", prop);	
		driver.get(sUrlDelete);
		driver.get(sURL);*/
		
		
	}


	@After
	public void cleanUp()
	{		
		DriverFactory.quitDriver();
	}
}
