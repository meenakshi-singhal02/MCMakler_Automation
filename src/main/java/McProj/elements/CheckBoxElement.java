package McProj.elements;

import org.openqa.selenium.By;


/**
 * checkbox Specific implementation for WebElements
 * 
 */
public class CheckBoxElement extends Element {


	/**
	 * Constructor invoking super.
	 * 
	 * @param by
	 *            : The by reference to set.
	 */
	public CheckBoxElement(final By by) {
		super(by);
	}

	/**
	 * constructor invoking super.
	 * 
	 * @param locator
	 *            : The locator to set.
	 * @param locatorType
	 *            : The locatorType to set.
	 */
	public CheckBoxElement(String locator, LocatorType locatorType) {
		super(locator, locatorType);
	}

	/**
	 * Checks if the checkbox is selected or not.
	 */
	public void check() {
		if (!isSelected()) {
			super.click();
		}
	}

	/**
	 * clicks on the checkbox element.
	 */
	@Override
	public void click() {
		super.click();
	}

	/**
	 * checks the selection of a checkbox.
	 * 
	 * @return true if the element is selected.
	 */
	public boolean isSelected() {
		getElement();
		return element.isSelected();
	}

	/**
	 * Method to uncheck the selected element.
	 */
	public void uncheck() {
		if (isSelected()) {
			super.click();
		}
	}
}
