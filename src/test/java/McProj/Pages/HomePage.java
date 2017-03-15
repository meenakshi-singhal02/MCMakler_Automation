package McProj.Pages;


import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import McProj.Mc.Hooks;
import McProj.Mc.MyUtils;
import McProj.drivers.DriverFactory;
import McProj.elements.Button;
import McProj.elements.Element.LocatorType;
import McProj.elements.Link;

public class HomePage{

	
	private static Button btnAddAdvertisementbutton = new Button("//*[text()='add_circle_outline']", LocatorType.XPATH);
	private static Button btnSorting= new Button("//md-icon[@ng-class='getDirection()']", LocatorType.XPATH);
	private static Link linkAddvertisementName = new Link("//th/span", LocatorType.XPATH);
	public static MyUtils objMyUtils;
	//protected static WebDriver driver;
	
	static
	{
		objMyUtils = new MyUtils();	 
		
	}
	
	/*public HomePage()
	{
		
	}*/
	
	public static enum ColumnNames {
		AdvertisementName, Street, Rooms, Price, Status,
	}
	
		
	public void clickAddAdvertisement()
	{
		try
		{
			objMyUtils.waitForPageToLoad();
			btnAddAdvertisementbutton.click();
		}
		 catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void verifyAdvertisementData(String sAddvertisement, String sStreet, String sRooms, String sPrice)
	{
			
			 Assert.assertTrue("Advertisement is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[1][text()='"+sAddvertisement+"']")).isDisplayed());
			 Assert.assertTrue("Street is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[2][text()='"+sStreet+"']")).isDisplayed());
			 Assert.assertTrue("Rooms is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[3][text()='"+sRooms+"']")).isDisplayed());
			 Assert.assertTrue("Price is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[4][contains(text(),'"+sPrice+",00')]")).isDisplayed());
				
	}
	
	public void clickOnAdvertisementCellData(ColumnNames ColumnName, String sData)
	{
		WebElement element = null;				
		try
		{
			switch (ColumnName)
			{	
			case AdvertisementName:
				 element = Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[1][text()='"+sData+"']"));
				 break;
			case Street:
				 element = Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[2][text()='"+sData+"']"));
				 break;
			case Rooms:
				 element = Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[3][text()='"+sData+"']"));
				 break;
			case Price:
				 element = Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[4][contains(text(),'"+sData+",00')]"));
				 break;
			case Status:
				 element = Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr/td[5][contains(text(),'"+sData+"']"));
				 break;
			default:
				System.out.println("Please provide field name");
			}
			
			element.click();
		}
		
		catch (Exception e) {
			System.out.println("Failed in function enterAddvertisementName");
			e.printStackTrace();
		
							}
		
	}
	
	
	public void clickOnArrowToSort()
	{
		try{
			linkAddvertisementName.click();			
		}
		catch (Exception e) {
			System.out.println("Failed in function clickOnArrowToSort");
			e.printStackTrace();

		}
		
	}
	
	public void verifyDataSorting(String sAdvertisement1, String sAdvertisement2, String sAdvertisement3, String sAdvertisement4)
	{
			objMyUtils.waitForPageToLoad();
			 Assert.assertEquals("Advertisement " +sAdvertisement1+ " is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr[1]/td[1]")).getText(), sAdvertisement1) ;
			 Assert.assertEquals("Advertisement " +sAdvertisement2+ " is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr[2]/td[1]")).getText(), sAdvertisement2) ;
			 Assert.assertEquals("Advertisement " +sAdvertisement3+ " is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr[3]/td[1]")).getText(), sAdvertisement3) ;
			 Assert.assertEquals("Advertisement " +sAdvertisement4+ " is present", Hooks.driver.findElement(By.xpath("//table[@class='md-table ng-isolate-scope']//tbody/tr[4]/td[1]")).getText(), sAdvertisement4) ;
			 
	}
	
	
	public void DeleteAndLaunch(String sString, boolean bDelete)
	{
		Properties prop = objMyUtils.loadFile("Config");
		if(bDelete==true)		
		{						
		String sURLDelete = objMyUtils.getPropertiesValue("urlDelete", prop);
		String sURL = objMyUtils.getPropertiesValue("url", prop);
		Hooks.driver.get(sURLDelete);
		Hooks.driver.get(sURL);
		}
		
		else
		{
			String sCommonURL = objMyUtils.getPropertiesValue(sString, prop);
			Hooks.driver.get(sCommonURL);
			}
		
	}
		
}






