@Pre-Scenario_2
Feature: Scenario_2_Edit_Advertisement
Scenario Outline:As a user when Im on the list view I want to able to create new advertisements.
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


@Scenario_2
Scenario Outline: As a user, when I am on the list view, I would like to click on an entry in the list to edit it.
Given Launch App or delete existing advertisement "url" and false if want to delete
And I am on website herokuapp
When Select one of the record in list view and click on the "<ColumnName>" "<Value>"
Then The Advertisement detail screen should open, All fields should be editable.
And Cancel advertisement

Examples:

| ColumnName | Value |
| AdvertisementName| HeroKuAppAdd | 
| Street | HeroKuStreet |
| Rooms | 3 |
| Price | 22 |






    
