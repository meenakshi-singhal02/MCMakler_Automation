@Prerequsite_Scenario_9
Feature: Scenario_9_Sort advertisement

Scenario:
Given Launch App or delete existing advertisement "" and true if want to delete

@Scenario_9
Scenario Outline: As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.
Given Launch App or delete existing advertisement "url" and false if want to delete
And I am on website herokuapp
When I click on button to add advertisement
And I enter Add "<AdvertisementName>"
And I enter Street "<Street>"
And I enter Rooms "<Rooms>"
And I enter Price "<Price>"
And Save advertisement

Examples:

| AdvertisementName | Street | Rooms | Price |
| AbcasName | HeroKuStreet | 3 | 22 |
| BaseName | HeroKuStreet | 3 | 22 |
| CanonName | HeroKuStreet | 3 | 22 |
| JhonName | HeroKuStreet | 3 | 22 |


Scenario Outline: As a user when Im on the list view I can sort the list entries by name in ascending and descending order.

Given Launch App or delete existing advertisement "url" and false if want to delete
And I am on website herokuapp
And Click on arrow
Then Verify sequency of Advertisements "<AdvertisementName1>" "<AdvertisementName2>" "<AdvertisementName3>" "<AdvertisementName4>"
And Click on arrow
Then Verify sequency of Advertisements "<AdvertisementName4>" "<AdvertisementName3>" "<AdvertisementName2>" "<AdvertisementName1>"


Examples:

| AdvertisementName1 | AdvertisementName2 | AdvertisementName3 | AdvertisementName4 |
| AbcasName | BaseName | CanonName | JhonName |