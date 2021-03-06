package McProj.drivers;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

/**
 * Enum for generating Specific Driver Type.
 */
public enum DriverType implements IDriverSetup {

	FIREFOX {

		public WebDriver getDriverObject(DesiredCapabilities dc) {

			// TODO Auto-generated method stub
			return new FirefoxDriver(dc);

		}

		public DesiredCapabilities getDesiredCapabilities() {
			// TODO Auto-generated method stub
			DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			capabilities.setBrowserName("firefox");
			//System.out.println(config.getExplicitWaitTimeout());
			return capabilities;
		}

	},
	CHROME {

		public WebDriver getDriverObject(DesiredCapabilities dc) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir")+"/jar/chromedriver.exe");
			return new ChromeDriver(dc);


		}

		public DesiredCapabilities getDesiredCapabilities() {
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			//System.out.println(config.getExplicitWaitTimeout());
			return capabilities;
		}
	},

	IE {

		public WebDriver getDriverObject(DesiredCapabilities dc) {
			// TODO Auto-generated method stub
			return null;
		}

		public DesiredCapabilities getDesiredCapabilities() {
			// TODO Auto-generated method stub
			return null;
		}
	},
	
	REMOTE {

		public WebDriver getDriverObject(DesiredCapabilities dc) {
			// TODO Auto-generated method stub
			WebDriver driver = null;
			final String USERNAME = "mcsmallerautomat1";
			  final String AUTOMATE_KEY = "6DM4Dp8hjBSGgo1npqsy";
			  final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
			try {
				 driver = new RemoteWebDriver(new URL(URL), dc);
				//return new RemoteWebDriver(new URL(URL), dc);
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return driver;
		}

		public DesiredCapabilities getDesiredCapabilities() {
			// TODO Auto-generated method stub
			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setPlatform(Platform.WINDOWS);
			capabilities.setCapability("build", "Automation_BrowserStack");
			return capabilities;
		}
		
	}



}
