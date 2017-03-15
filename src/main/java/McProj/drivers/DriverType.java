package McProj.drivers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

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



}
