package McProj.elements;

import org.openqa.selenium.By;

/**
 * Defines the functionalities of locating different WebElements using CSS
 * Selectors.It only defines the functionalities supported by the framework for
 * the selectors.
 */
public class CssSelector extends Element {

	/**
	 * Initializing the CssSelector Element with By locator.
	 * 
	 * @param by
	 *            The By locator
	 */
	public CssSelector(By by) {
		super(by);
		// TODO Auto-generated constructor stub
	}

	/**
	 * Initializing the CssSelector Element.
	 * 
	 * @param locator
	 *            : The css locator
	 * @param locatorType
	 *            : The css locator type.
	 */
	public CssSelector(String locator, LocatorType locatorType) {
		super(locator, locatorType);

	}

}
