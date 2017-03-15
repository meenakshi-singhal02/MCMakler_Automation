@Scenario_5
Feature: Scenario_5_Check save button status
Scenario Outline: As a user when Im on the advertisement form view, the save button is not active as long the form is not valid.
Given Launch App or delete existing advertisement "" and true if want to delete
And I am on website herokuapp
When I click on button to add advertisement
And I enter Add "<AdvertisementName>"
#Verify Save button is Disabled
Then I verify Save button status is "<ButtonDisabled>"
And I enter Street "<Street>"
#Verify Save button is Disabled
Then I verify Save button status is "<ButtonDisabled>"
And I enter Rooms "<Rooms>"
#Verify Save button is Disabled
Then I verify Save button status is "<ButtonDisabled>"
And I enter Price "<Price>"
#Verify Save button is Enabled Now
Then I verify Save button status is "<ButtonEnabled>"
And Save advertisement
Then Verify advertisement displayed successfully "<AdvertisementName>" "<Street>" "<Rooms>" "<Price>"


Examples:
| AdvertisementName | Street | Rooms | Price | ButtonDisabled | ButtonEnabled |
| HeroKuAppAdd | HeroKuStreet | 3 | 18 | false | true |



