package McProj.Mc;
import java.awt.AWTException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import McProj.Mc.Hooks;
import McProj.Pages.AdvertisementPage;
import McProj.Pages.HomePage;
import McProj.Pages.HomePage.ColumnNames;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	public static WebDriver driver;
	public static AdvertisementPage objAdvertisementPage;
	public static HomePage objHomePage;
	
	static
	{
		objHomePage = new HomePage();
		objAdvertisementPage = new AdvertisementPage();

	}
	
	public TestSteps()
	{
		driver= Hooks.driver;
	}
	
	
	@Given("^I am on website herokuapp$")
	public void I_am_on_website_herokuapp()
	{
		System.out.println(driver.getCurrentUrl());
	}
	
	@When("^I click on button to add advertisement$")
	public void I_click_on_button_to_add_advertisement() throws InterruptedException
	{
		objHomePage.clickAddAdvertisement();
	}
	
	@And("^I enter Add \"([^\"]*)\"$")	
	public void I_enter_Add(String arg1) 
	{
		objAdvertisementPage.enterAddvertisementName(arg1);
	}
	
	@And("^I enter Street \"([^\"]*)\"$")	
	public void I_enter_Street(String arg1) 
	{
		objAdvertisementPage.enterStreet(arg1);
	}
	
	@And("^I enter Rooms \"([^\"]*)\"$")	
	public void I_enter_Rooms(String arg1) 
	{
		objAdvertisementPage.enterRooms(arg1);
	}
	
	@And("^I enter Price \"([^\"]*)\"$")	
	
	public void I_enter_Price(String arg1) 
	{
		objAdvertisementPage.enterPrice(arg1);
	}
	
	@And("^Save advertisement$")	
	public void Save_advertisement() 
	{
		objAdvertisementPage.clickSaveAdvertisement();
		
	}
	
	@And("^Cancel advertisement$")	
	public void Cancel_advertisement() 
	{
		objAdvertisementPage.clickCancelAdvertisement();
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Then("^Verify advertisement displayed successfully \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void verifyAdvertisementData(String arg1,String arg2,String arg3,String arg4)
	{
		objHomePage.verifyAdvertisementData(arg1, arg2, arg3, arg4);
	}
	
	@When("^Select one of the record in list view and click on the \"([^\"]*)\" \"([^\"]*)\"$")
	public void selectAdvertisement(ColumnNames arg1, String arg2)
	{
		objHomePage.clickOnAdvertisementCellData(arg1, arg2);
	}
	
	@Then("^The Advertisement detail screen should open, All fields should be editable.$")
	public void verifyFieldsEditableOnAdvertisementDetailPage()
	{
		objAdvertisementPage.verifyAllFieldsAreEditable();
	}
	
	@And("^I verify warning message \"([^\"]*)\"$")		
	public void verifyWarningMessage(String arg1) 
	{
		objAdvertisementPage.verifyErrorWarning(arg1);
	}

	@Then("^I verify Save button status is \"([^\"]*)\"$")		
	public void verifySaveButtonStatus(Boolean arg1) 
	{
		objAdvertisementPage.verifySaveButtonEnabledStatus(arg1);
	}
	
	@And("^Click on arrow$")		
	public void clickOnArrow() 
	{
		objHomePage.clickOnArrowToSort();
	}
	
	@Then("^Verify sequency of Advertisements \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void verifySequencyOfAdvertisements(String arg1,String arg2,String arg3,String arg4)
	{
		objHomePage.verifyDataSorting(arg1, arg2, arg3, arg4);
	}
	
	@Given("^Launch App or delete existing advertisement \"([^\"]*)\" and (true|false) if want to delete$")
	public void launchAppOrDeleteExistingAdvertisement(String sURL, boolean bDeleteAndLaunch)
	{
		objHomePage.DeleteAndLaunch(sURL, bDeleteAndLaunch);
	}
	
	@And("^Press enter key$")
		public void pressEnterKey() throws InterruptedException, AWTException 
		{
			objAdvertisementPage.pressKeyToSubmit();
			
		}
	
	
	
	
}
