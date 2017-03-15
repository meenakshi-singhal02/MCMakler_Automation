package McProj.elements;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import McProj.Mc.Hooks;
import McProj.drivers.DriverFactory;


/**
 * Element Class to define different types of Elements
 */
public class Element {

	WebDriver driver;

	

	/**
	 * The WebElement element
	 */
	protected WebElement element = null;

	/**
	 * The String locator
	 */
	private String locator = null;

	/**
	 * The By by
	 */
	private By by = null;

	/**
	 * The enum LocatorType for different types of Locator.
	 */
	public static enum LocatorType {
		ID, NAME, CLASS_NAME, LINK_TEXT, PARTIAL_LINK_TEXT, CSS_SELECTOR, TAG_NAME, XPATH,
	}

	/**
	 * Constructor creating a by reference.
	 * 
	 * @param by
	 */
	public Element(By by) {
		this.by = by;
	}

	/**
	 * Constructor creating element with a locator and locatorType
	 * 
	 * @param locator
	 * @param locatorType
	 */
	public Element(String locator, LocatorType locatorType) {
		this.locator = locator;
		this.by = getLocatorBy(locator, locatorType);
		
		
	}

	/**
	 * Method for fetching the locator based on locatorType
	 * 
	 * @param locator
	 * @param locatorType
	 * @return
	 */
	private By getLocatorBy(final String locator, final LocatorType locatorType) {
		
		switch (locatorType) {

		case ID:
			return By.id(locator);

		case NAME:
			return By.name(locator);

		case CLASS_NAME:
			return By.className(locator);

		case LINK_TEXT:
			return By.linkText(locator);

		case PARTIAL_LINK_TEXT:
			return By.partialLinkText(locator);

		case CSS_SELECTOR:
			return By.cssSelector(locator);

		case TAG_NAME:
			return By.tagName(locator);

		case XPATH:
			return By.xpath(locator);

		default:
			return By.xpath(locator);
		}
	}

	/**
	 * Creates the element with explicit wait.
	 */
	protected  WebElement getElement() {
		
		return element = (new WebDriverWait(DriverFactory.getDriver(), 20)).until(ExpectedConditions.visibilityOfElementLocated(by));
		


	}

	/**
	 * clicks on the intended element.
	 */
	public void click() {
		
		getElement();
		element.click();
	}

	/**
	 * sends the character stream to intended element.
	 * 
	 * @param arg0
	 *            : chars to send.
	 */
	public void sendKeys(final CharSequence arg0) {
		
		getElement().clear();;
		
		getElement().sendKeys(arg0);
	}
	
	public void sendEnterKey() {
		//getElement().sendKeys(Keys.TAB);
		getElement().sendKeys(Keys.ENTER);
	}

	/**
	 * Checks if the text is present for intended element.
	 * 
	 * @param text
	 *            - text to check.
	 * @return true if the text is present, else false.
	 */
	public boolean isTextPresent(final String text) {
		
		getElement();
		return element.getText().contains(text);
	}

	/**
	 * checks if a particular element is enabled.
	 * 
	 * @return true if the element is enabled, else false.
	 */
	public boolean isEnabled() {
		
		getElement();
		return element.isEnabled();
	}

	/**
	 * checks if a particular element is selected.
	 * 
	 * @return true if the element is selected, else false.
	 */
	public boolean isSelected() {
		
		getElement();
		return element.isSelected();
	}

	/**
	 * checks if a element id displayed.
	 * 
	 * @return true if the element is displayed, else false.
	 */
	public boolean isDisplayed() {
		
		try {
			getElement();
			return element.isDisplayed();
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * Gets the value attribute for the element.
	 * 
	 * @return value attribute of the element.
	 */
	public String getValue() {
		
		getElement();
		return element.getAttribute("value");
	}

	/**
	 * Gets the text for the element.
	 * 
	 * @return text for the element.
	 */
	public String getText() {
		
		getElement();
		return element.getText();
	}

	/**
	 * Gets the tag name of the element.
	 * 
	 * @return tagName for intended element
	 */
	public String getTagName() {
		
		getElement();
		return element.getTagName();
	}

	/**
	 * Gets the locator
	 * 
	 * @return locator for the element
	 */
	public String getLocator() {
		return locator;
	}
	
	

}
