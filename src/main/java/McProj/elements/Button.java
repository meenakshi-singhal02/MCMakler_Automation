package McProj.elements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import McProj.Mc.Hooks;


/**
 * Button Specific implementation for WebElements
 *
 */
public class Button extends Element {
	
	WebDriver driver;

	
	
	public Button(By by) {
		super(by);
		// TODO Auto-generated constructor stub
	}

	/**
	 * constructor invoking super.
	 * 
	 * @param locator
	 *            : The locator to set.
	 * @param locatorType
	 *            : The locatorType to set.
	 */
	public Button(String locator, LocatorType locatorType) {
		super(locator,locatorType);
		
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * Performs the submit operation over any webelement
	 */
	public void submit() {
		getElement();
		element.submit();
	}

}
