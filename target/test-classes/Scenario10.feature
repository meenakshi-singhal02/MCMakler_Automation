@Scenario_10
Feature: Scenario_10_Create and Update advertisement use Enter key to submit
Scenario Outline: As a user, after I update an advertisement, I should see the updated entry in the list.
Given Launch App or delete existing advertisement "" and true if want to delete
And I am on website herokuapp
When I click on button to add advertisement
And I enter Add "<AdvertisementName>"
And I enter Street "<Street>"
And I enter Rooms "<Rooms>"
And I enter Price "<Price>"
And Press enter key
Then Verify advertisement displayed successfully "<AdvertisementName>" "<Street>" "<Rooms>" "<Price>"
When Select one of the record in list view and click on the "<ColumnName>" "<AdvertisementName>"
And I enter Add "<NewAdvertisementName>"
And I enter Street "<NewStreet>"
And I enter Rooms "<NewRooms>"
And I enter Price "<NewPrice>"
And Press enter key
Then Verify advertisement displayed successfully "<NewAdvertisementName>" "<NewStreet>" "<NewRooms>" "<NewPrice>"

Examples:

| ColumnName | AdvertisementName | Street | Rooms | Price | NewAdvertisementName | NewStreet | NewRooms | NewPrice |
| AdvertisementName | HeroKuAppAdd | HeroKuStreet | 3 | 22 | NewHeroKuAppAdd | NewHeroKuStreet | 4 | 23 |




