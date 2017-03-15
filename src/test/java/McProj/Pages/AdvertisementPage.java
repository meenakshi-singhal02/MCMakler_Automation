package McProj.Pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import McProj.Mc.Hooks;
import McProj.Mc.MyUtils;
import McProj.drivers.DriverFactory;
import McProj.elements.Button;
import McProj.elements.Element.LocatorType;
import McProj.elements.TextField;

public class AdvertisementPage{

	private static TextField txtAdvertisementName = new TextField("//label[text()='Advertisement name']/following::input", LocatorType.XPATH);
	private static TextField txtStreetName = new TextField("//label[text()='Street']/following::input", LocatorType.XPATH);
	private static TextField txtRooms = new TextField("//label[text()='Rooms']/following::input", LocatorType.XPATH);
	private static TextField txtPrice = new TextField("//label[text()='Price']/following::input", LocatorType.XPATH);
	private static Button btnSave = new Button("//button[@ng-click='$ctrl.saveAdvertisementDetails()']", LocatorType.XPATH);
	private static Button btnCancel = new Button("//button[@ng-click='$ctrl.cancel()']", LocatorType.XPATH);
	private static MyUtils objMyUtils;
	
	static
	{
		objMyUtils = new MyUtils();	 
		
	}
	
	public void enterAddvertisementName(String sData)
	{		System.out.println("In function enterAddvertisementName");
			txtAdvertisementName.clearandType(sData);
		
	}
	
	public void enterStreet(String sData)
	{	
		
			System.out.println("In function enterStreet");
			txtStreetName.clearandType(sData);
		
	}
	
	public void enterRooms(String sData)
	{
		
			System.out.println("In function enterRooms");
			txtRooms.clearandType(sData);
		
	}
	
	public void enterPrice(String sData)
	{
		
			System.out.println("In function enterPrice");
			txtPrice.clearandType(sData);
		
	}

	
	public void clickSaveAdvertisement()
	{
		try
		{
			System.out.println("In function clickSaveAdvertisement");
			btnSave.click();
			objMyUtils.waitForPageToLoad();
			//Thread.sleep(1000);
		}
		 catch (Exception e) {
			System.out.println("Failed in function clickSaveAdvertisement");
			e.printStackTrace();
			
		}
	}
	
	public void clickCancelAdvertisement()
	{
	
			System.out.println("In function clickCancelAdvertisement");
			btnCancel.click();

	}
	
	public void verifyAllFieldsAreEditable()
	{
		
			Assert.assertTrue("Adbvertisement field is editable", txtAdvertisementName.isEnabled());
			Assert.assertTrue("Street field is editable",txtStreetName.isEnabled());
			Assert.assertTrue("Rooms field is editable",txtRooms.isEnabled());
			Assert.assertTrue("Price field is editable",txtPrice.isEnabled());
		
		
	}
	
	public void verifyErrorWarning(String sWarningMsg)
	{
		//WebElement element = null;
			System.out.println("In function verifyErrorWarning");
			WebElement ele = Hooks.driver.findElement(By.xpath("//div[contains(text(),'"+sWarningMsg+"')]"));
			Assert.assertTrue("Warning msg: "+sWarningMsg+" is diaplyed",ele.isDisplayed());
					
	}
	
	public void verifySaveButtonEnabledStatus(Boolean statusType)
	{
		
			if (statusType== true){
				Assert.assertTrue("Save Button is enabled ",btnSave.isEnabled());
			}
			else
			{
				Assert.assertFalse("Save Button is enabled ",btnSave.isEnabled());
			}

		
	}
	
	public void pressKeyToSubmit() throws InterruptedException, AWTException
	{
		//WebElement element = null;
			/*Actions action = new Actions(Hooks.driver);
			action.sendKeys(Keys.ENTER).build().perform();*/
			objMyUtils.waitForPageToLoad();
			//Thread.sleep(1000);
			Robot rBot = new Robot();
			rBot.keyPress(KeyEvent.VK_TAB);
			rBot.keyRelease(KeyEvent.VK_TAB);
			btnSave.sendEnterKey();
			objMyUtils.waitForPageToLoad();
			//Using thread.sleep due to extreme sync issue
			//Thread.sleep(5000);
					
	}
	
	
}

