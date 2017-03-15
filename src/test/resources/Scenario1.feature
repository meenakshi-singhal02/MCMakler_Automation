@Scenario_1 @Scenario_6
Feature: Scenario_1_Create advertisements


Scenario Outline: As a user when Im on the list view I want to able to create new advertisements.
Given Launch App or delete existing advertisement "" and true if want to delete
And I am on website herokuapp
When I click on button to add advertisement
And I enter Add "<AdvertisementName>"
And I enter Street "<Street>"
And I enter Rooms "<Rooms>"
And I enter Price "<Price>"
And Save advertisement
Then Verify advertisement displayed successfully "<AdvertisementName>" "<Street>" "<Rooms>" "<Price>"


Examples:

| AdvertisementName | Street | Rooms | Price |
| HeroKuAppAdd | HeroKuStreet | 3 | 22 |