package McProj.elements;

import org.openqa.selenium.By;

/**
 * Defines the functionalities of locating different WebElements using XPath
 * Selection. It only defines the functionalities supported by the framework for
 * the selectors.
 */
public class XPath extends Element {

	/**
	 * Initializing the XPath Element with By locator.
	 * 
	 * @param by
	 *            The By locator
	 */
	public XPath(By by) {
		super(by);

	}

	/**
	 * Initializing the Xpath Element.
	 * 
	 * @param locator
	 *            : The xpath locator
	 * @param locatorType
	 *            : The xpath locator type.
	 */
	public XPath(String locator, LocatorType locatorType) {
		super(locator, locatorType);
		// TODO Auto-generated constructor stub
	}

}
