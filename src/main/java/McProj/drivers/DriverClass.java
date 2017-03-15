package McProj.drivers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;


public class DriverClass {
	
	/**
	 * The WebDriver driver;	
	 */
	private WebDriver driver;
	
	/**
	 * The DriverType selectedDriverType
	 */
	private DriverType selectedDriverType;
	
	/**
	 *String which stores the browserName.
	 */
	private String browserName=null;
	
	/**
	 * Instance of DriverConfig.
	 */
	//private DriverConfig config=new DriverConfig();
	
	/**
	 * The default driver type that needs to be initialized
	 */
	private final DriverType defaultDriverType = DriverType.FIREFOX;
		
 
	/**
	 * Constructor 
	 * @param: the browser to set.
	 */
	public DriverClass(String browser) {
		this.browserName=browser;
		
	}
	
	/**
	 * Constructor
	 */
	public DriverClass(){
		
	}

	/**
	 * Sets the desired capabilities for selected driver.
	 * @return: the instantiated driver.
	 */
	public WebDriver getDriver(){
		
		if(driver==null){
			
			selectedDriverType = getDriverType();
			DesiredCapabilities desiredCapabilities = selectedDriverType.getDesiredCapabilities();
            instantiateWebDriver(desiredCapabilities);
            
		}
		
		return driver;
	}
	

	/**
	 * Method to quite the driver.
	 */
	public void quitDriver(){
		
		driver.quit();
	}
	
	/**
	 * Gets the driver config
	 * @return: the configuration reference.
	 */
	//public DriverConfig getConfig(){
	//	return config;
	//}
	
	/**
	 * Method to fetch driverType based on the browser name
	 * @return: DriverType reference.
	 */
	private DriverType getDriverType() {
        DriverType driverType = defaultDriverType;
       
        try {
            driverType = DriverType.valueOf(browserName);
        } catch (IllegalArgumentException ignored) {
            System.err.println("Unknown driver specified, defaulting to '" + driverType + "'...");
        } catch (NullPointerException ignored) {
            System.err.println("No driver specified, defaulting to '" + driverType + "'...");
        }
        return driverType;
    }
	

	/**
	 * Method to instantiate Webdriver and getting driver object based on the desiredCapabilities
	 * @param: desiredCapabilities to set
	 */
    private void instantiateWebDriver(DesiredCapabilities desiredCapabilities) {
        driver = selectedDriverType.getDriverObject(desiredCapabilities);
    }
    
    
}


