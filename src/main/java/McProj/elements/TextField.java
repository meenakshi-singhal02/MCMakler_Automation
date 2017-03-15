package McProj.elements;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;



/**
 * checkbox Specific implementation for WebElements
 * 
 */
public class TextField extends Element {
	
	

	public TextField(By by) {
		super(by);
		// TODO Auto-generated constructor stub
	}
	
	public TextField(String locator, LocatorType locatorType) {
		super(locator, locatorType);
	}


	/**
	 * The Logger logger
	 */
	
      public void clearandType(String text){
    	  getElement().clear();
    	  getElement().sendKeys(text);
    	  getElement().sendKeys(Keys.TAB);
      }
      
      public void Type(String text){
    	  getElement().sendKeys(text);
      }
      
 
	
}

