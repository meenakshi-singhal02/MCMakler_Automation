package McProj.drivers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public interface IDriverSetup {
	
	WebDriver getDriverObject (DesiredCapabilities dc);
	
	DesiredCapabilities getDesiredCapabilities();

}
