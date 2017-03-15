@Scenario_3
Feature: Scenario_3_Check price format
Scenario Outline: As a user, when I'm on the advertisement form view, I must provide a price with a proper format.
Given Launch App or delete existing advertisement "" and true if want to delete
And I am on website herokuapp
When I click on button to add advertisement
And I enter Add "<AdvertisementName>"
And I enter Street "<Street>"
And I enter Rooms "<Rooms>"
#Entering value as string in Price field
And I enter Price "<PriceString>"
Then I verify warning message "<WarningMessage>"
#Entering Negative price
And I enter Price "<NegativePrice>"
Then I verify warning message "<WarningMessage>"
#Entering Correct price
And I enter Price "<Price>"
And Save advertisement
Then Verify advertisement displayed successfully "<AdvertisementName>" "<Street>" "<Rooms>" "<Price>"


Examples:

| AdvertisementName | Street | Rooms | PriceString | NegativePrice | Price | WarningMessage |
| HeroKuAppAdd | HeroKuStreet | 3 | test | -23 | 12 | Invalid price |



