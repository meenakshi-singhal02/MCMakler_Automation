@Scenario_4
Feature: Scenario_4_Check advertisement format
Scenario Outline: As a user, when I'm on the advertisement form view, I must provide a Advertisement with a proper format.
Given Launch App or delete existing advertisement "" and true if want to delete
And I am on website herokuapp
When I click on button to add advertisement
#Enter Special character in Advertisement field
And I enter Add "<AdvertisementNameSpecial>"
Then I verify warning message "<WarningMessage1>"
#Enter more than 50 character in Advertisement field
And I enter Add "<AdvertisementNameLong>"
Then I verify warning message "<WarningMessage2>"
#Enter Correct Name in Advertisement Field
And I enter Add "<AdvertisementName>"
And I enter Street "<Street>"
And I enter Rooms "<Rooms>"
And I enter Price "<Price>"
And Save advertisement
Then Verify advertisement displayed successfully "<AdvertisementName>" "<Street>" "<Rooms>" "<Price>"


Examples:

| AdvertisementNameSpecial | AdvertisementNameLong | AdvertisementName | Street | Rooms | Price | WarningMessage1 | WarningMessage2 |
| $$ | HeroKuStreetAdvertisementNameEnterVeryLongNameMoreThan50Character | HeroKuAppAdd | HeroKuStreet | 3 | 18 | Alphabets and numerals only | Max length reached|



