$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scenario1.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_1_Create advertisements",
  "description": "",
  "id": "scenario-1-create-advertisements",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_1"
    },
    {
      "line": 1,
      "name": "@Scenario_6"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a user when Im on the list view I want to able to create new advertisements.",
  "description": "",
  "id": "scenario-1-create-advertisements;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "scenario-1-create-advertisements;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price"
      ],
      "line": 19,
      "id": "scenario-1-create-advertisements;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;1"
    },
    {
      "cells": [
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 20,
      "id": "scenario-1-create-advertisements;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5226975653,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "As a user when Im on the list view I want to able to create new advertisements.",
  "description": "",
  "id": "scenario-1-create-advertisements;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_6"
    },
    {
      "line": 1,
      "name": "@Scenario_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"22\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 6287641320,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 174402115,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5387728559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 792019706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 521087492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 434447734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 409877246,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5204920751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "22",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 529301366,
  "status": "passed"
});
formatter.after({
  "duration": 1806789037,
  "status": "passed"
});
formatter.uri("Scenario10.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_10_Create and Update advertisement use Enter key to submit",
  "description": "",
  "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_10"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user, after I update an advertisement, I should see the updated entry in the list.",
  "description": "",
  "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit;as-a-user,-after-i-update-an-advertisement,-i-should-see-the-updated-entry-in-the-list.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Press enter key",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select one of the record in list view and click on the \"\u003cColumnName\u003e\" \"\u003cAdvertisementName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter Add \"\u003cNewAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"\u003cNewStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"\u003cNewRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"\u003cNewPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Press enter key",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"\u003cNewAdvertisementName\u003e\" \"\u003cNewStreet\u003e\" \"\u003cNewRooms\u003e\" \"\u003cNewPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit;as-a-user,-after-i-update-an-advertisement,-i-should-see-the-updated-entry-in-the-list.;",
  "rows": [
    {
      "cells": [
        "ColumnName",
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price",
        "NewAdvertisementName",
        "NewStreet",
        "NewRooms",
        "NewPrice"
      ],
      "line": 23,
      "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit;as-a-user,-after-i-update-an-advertisement,-i-should-see-the-updated-entry-in-the-list.;;1"
    },
    {
      "cells": [
        "AdvertisementName",
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "22",
        "NewHeroKuAppAdd",
        "NewHeroKuStreet",
        "4",
        "23"
      ],
      "line": 24,
      "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit;as-a-user,-after-i-update-an-advertisement,-i-should-see-the-updated-entry-in-the-list.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3866137101,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "As a user, after I update an advertisement, I should see the updated entry in the list.",
  "description": "",
  "id": "scenario-10-create-and-update-advertisement-use-enter-key-to-submit;as-a-user,-after-i-update-an-advertisement,-i-should-see-the-updated-entry-in-the-list.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_10"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Press enter key",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"22\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select one of the record in list view and click on the \"AdvertisementName\" \"HeroKuAppAdd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter Add \"NewHeroKuAppAdd\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"NewHeroKuStreet\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"4\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"23\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Press enter key",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"NewHeroKuAppAdd\" \"NewHeroKuStreet\" \"4\" \"23\"",
  "matchedColumns": [
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5713420053,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 240992220,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5444993160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 878249991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 476611745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 431124882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 463377672,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.pressEnterKey()"
});
formatter.result({
  "duration": 10678200443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "22",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 511820738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvertisementName",
      "offset": 56
    },
    {
      "val": "HeroKuAppAdd",
      "offset": 76
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 222719189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 1332665979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 532205897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 512814514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 409757271,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.pressEnterKey()"
});
formatter.result({
  "duration": 10325839428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "NewHeroKuStreet",
      "offset": 63
    },
    {
      "val": "4",
      "offset": 81
    },
    {
      "val": "23",
      "offset": 85
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 477178708,
  "status": "passed"
});
formatter.after({
  "duration": 1250837968,
  "status": "passed"
});
formatter.uri("Scenario2.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_2_Edit_Advertisement",
  "description": "",
  "id": "scenario-2-edit-advertisement",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user when Im on the list view I want to able to create new advertisements.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price"
      ],
      "line": 16,
      "id": "scenario-2-edit-advertisement;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;1"
    },
    {
      "cells": [
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 17,
      "id": "scenario-2-edit-advertisement;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3792803260,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a user when Im on the list view I want to able to create new advertisements.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user-when-im-on-the-list-view-i-want-to-able-to-create-new-advertisements.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"22\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5962896179,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 34311479,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5381597439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 801537735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 490623004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 417569105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 533329558,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5348617720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "22",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 534240166,
  "status": "passed"
});
formatter.after({
  "duration": 1303343201,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "As a user, when I am on the list view, I would like to click on an entry in the list to edit it.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario_2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select one of the record in list view and click on the \"\u003cColumnName\u003e\" \"\u003cValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The Advertisement detail screen should open, All fields should be editable.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Cancel advertisement",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;",
  "rows": [
    {
      "cells": [
        "ColumnName",
        "Value"
      ],
      "line": 30,
      "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;1"
    },
    {
      "cells": [
        "AdvertisementName",
        "HeroKuAppAdd"
      ],
      "line": 31,
      "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;2"
    },
    {
      "cells": [
        "Street",
        "HeroKuStreet"
      ],
      "line": 32,
      "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;3"
    },
    {
      "cells": [
        "Rooms",
        "3"
      ],
      "line": 33,
      "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;4"
    },
    {
      "cells": [
        "Price",
        "22"
      ],
      "line": 34,
      "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3513162761,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "As a user, when I am on the list view, I would like to click on an entry in the list to edit it.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario_2"
    },
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select one of the record in list view and click on the \"AdvertisementName\" \"HeroKuAppAdd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The Advertisement detail screen should open, All fields should be editable.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Cancel advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 6516074016,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 20459834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvertisementName",
      "offset": 56
    },
    {
      "val": "HeroKuAppAdd",
      "offset": 76
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 522430930,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.verifyFieldsEditableOnAdvertisementDetailPage()"
});
formatter.result({
  "duration": 1240906927,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Cancel_advertisement()"
});
formatter.result({
  "duration": 10317597949,
  "status": "passed"
});
formatter.after({
  "duration": 1403522103,
  "status": "passed"
});
formatter.before({
  "duration": 3807961183,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "As a user, when I am on the list view, I would like to click on an entry in the list to edit it.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario_2"
    },
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select one of the record in list view and click on the \"Street\" \"HeroKuStreet\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The Advertisement detail screen should open, All fields should be editable.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Cancel advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5404120563,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 375816689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Street",
      "offset": 56
    },
    {
      "val": "HeroKuStreet",
      "offset": 65
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 326119724,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.verifyFieldsEditableOnAdvertisementDetailPage()"
});
formatter.result({
  "duration": 1460579314,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Cancel_advertisement()"
});
formatter.result({
  "duration": 10277914131,
  "status": "passed"
});
formatter.after({
  "duration": 1371851846,
  "status": "passed"
});
formatter.before({
  "duration": 3688923178,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "As a user, when I am on the list view, I would like to click on an entry in the list to edit it.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario_2"
    },
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select one of the record in list view and click on the \"Rooms\" \"3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The Advertisement detail screen should open, All fields should be editable.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Cancel advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 7397250127,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 201820862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rooms",
      "offset": 56
    },
    {
      "val": "3",
      "offset": 64
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 337985232,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.verifyFieldsEditableOnAdvertisementDetailPage()"
});
formatter.result({
  "duration": 1319010045,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Cancel_advertisement()"
});
formatter.result({
  "duration": 10305955050,
  "status": "passed"
});
formatter.after({
  "duration": 1371948818,
  "status": "passed"
});
formatter.before({
  "duration": 3757087470,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a user, when I am on the list view, I would like to click on an entry in the list to edit it.",
  "description": "",
  "id": "scenario-2-edit-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-would-like-to-click-on-an-entry-in-the-list-to-edit-it.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Scenario_2"
    },
    {
      "line": 1,
      "name": "@Pre-Scenario_2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select one of the record in list view and click on the \"Price\" \"22\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The Advertisement detail screen should open, All fields should be editable.",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Cancel advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 10148968090,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 197899550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 56
    },
    {
      "val": "22",
      "offset": 64
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 298723273,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.verifyFieldsEditableOnAdvertisementDetailPage()"
});
formatter.result({
  "duration": 1207279555,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Cancel_advertisement()"
});
formatter.result({
  "duration": 10226528666,
  "status": "passed"
});
formatter.after({
  "duration": 1390308202,
  "status": "passed"
});
formatter.uri("Scenario3.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_3_Check price format",
  "description": "",
  "id": "scenario-3-check-price-format",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user, when I\u0027m on the advertisement form view, I must provide a price with a proper format.",
  "description": "",
  "id": "scenario-3-check-price-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-price-with-a-proper-format.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Entering value as string in Price field"
    }
  ],
  "line": 11,
  "name": "I enter Price \"\u003cPriceString\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify warning message \"\u003cWarningMessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Entering Negative price"
    }
  ],
  "line": 14,
  "name": "I enter Price \"\u003cNegativePrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify warning message \"\u003cWarningMessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Entering Correct price"
    }
  ],
  "line": 17,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "scenario-3-check-price-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-price-with-a-proper-format.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName",
        "Street",
        "Rooms",
        "PriceString",
        "NegativePrice",
        "Price",
        "WarningMessage"
      ],
      "line": 24,
      "id": "scenario-3-check-price-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-price-with-a-proper-format.;;1"
    },
    {
      "cells": [
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "test",
        "-23",
        "12",
        "Invalid price"
      ],
      "line": 25,
      "id": "scenario-3-check-price-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-price-with-a-proper-format.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3827261965,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "As a user, when I\u0027m on the advertisement form view, I must provide a price with a proper format.",
  "description": "",
  "id": "scenario-3-check-price-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-price-with-a-proper-format.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_3"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Entering value as string in Price field"
    }
  ],
  "line": 11,
  "name": "I enter Price \"test\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify warning message \"Invalid price\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Entering Negative price"
    }
  ],
  "line": 14,
  "name": "I enter Price \"-23\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify warning message \"Invalid price\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 16,
      "value": "#Entering Correct price"
    }
  ],
  "line": 17,
  "name": "I enter Price \"12\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"12\"",
  "matchedColumns": [
    0,
    1,
    2,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 7189355832,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 310451464,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5372675039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 780459268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 467140787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 408147694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 509326741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid price",
      "offset": 26
    }
  ],
  "location": "TestSteps.verifyWarningMessage(String)"
});
formatter.result({
  "duration": 166832709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-23",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 468349033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid price",
      "offset": 26
    }
  ],
  "location": "TestSteps.verifyWarningMessage(String)"
});
formatter.result({
  "duration": 68676044,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Invalid price\u0027)]\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 68 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dlumsin9161001\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\msin91\\AppData\\Local\\Temp\\scoped_dir7808_21571}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: d37f81ac55e8cff4bb4f1f12d1f76d6b\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Invalid price\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat McProj.Pages.AdvertisementPage.verifyErrorWarning(AdvertisementPage.java:107)\r\n\tat McProj.Mc.TestSteps.verifyWarningMessage(TestSteps.java:112)\r\n\tat ✽.Then I verify warning message \"Invalid price\"(Scenario3.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "12",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1398358570,
  "status": "passed"
});
formatter.uri("Scenario4.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_4_Check advertisement format",
  "description": "",
  "id": "scenario-4-check-advertisement-format",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user, when I\u0027m on the advertisement form view, I must provide a Advertisement with a proper format.",
  "description": "",
  "id": "scenario-4-check-advertisement-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-advertisement-with-a-proper-format.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Enter Special character in Advertisement field"
    }
  ],
  "line": 8,
  "name": "I enter Add \"\u003cAdvertisementNameSpecial\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify warning message \"\u003cWarningMessage1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Enter more than 50 character in Advertisement field"
    }
  ],
  "line": 11,
  "name": "I enter Add \"\u003cAdvertisementNameLong\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify warning message \"\u003cWarningMessage2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Enter Correct Name in Advertisement Field"
    }
  ],
  "line": 14,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "scenario-4-check-advertisement-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-advertisement-with-a-proper-format.;",
  "rows": [
    {
      "cells": [
        "AdvertisementNameSpecial",
        "AdvertisementNameLong",
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price",
        "WarningMessage1",
        "WarningMessage2"
      ],
      "line": 24,
      "id": "scenario-4-check-advertisement-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-advertisement-with-a-proper-format.;;1"
    },
    {
      "cells": [
        "$$",
        "HeroKuStreetAdvertisementNameEnterVeryLongNameMoreThan50Character",
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "18",
        "Alphabets and numerals only",
        "Max length reached"
      ],
      "line": 25,
      "id": "scenario-4-check-advertisement-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-advertisement-with-a-proper-format.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3800891851,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "As a user, when I\u0027m on the advertisement form view, I must provide a Advertisement with a proper format.",
  "description": "",
  "id": "scenario-4-check-advertisement-format;as-a-user,-when-i\u0027m-on-the-advertisement-form-view,-i-must-provide-a-advertisement-with-a-proper-format.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_4"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Enter Special character in Advertisement field"
    }
  ],
  "line": 8,
  "name": "I enter Add \"$$\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify warning message \"Alphabets and numerals only\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Enter more than 50 character in Advertisement field"
    }
  ],
  "line": 11,
  "name": "I enter Add \"HeroKuStreetAdvertisementNameEnterVeryLongNameMoreThan50Character\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify warning message \"Max length reached\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#Enter Correct Name in Advertisement Field"
    }
  ],
  "line": 14,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"18\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"18\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5395574014,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 36891830,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5390582481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$$",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 734836149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alphabets and numerals only",
      "offset": 26
    }
  ],
  "location": "TestSteps.verifyWarningMessage(String)"
});
formatter.result({
  "duration": 136037316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreetAdvertisementNameEnterVeryLongNameMoreThan50Character",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 916404921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Max length reached",
      "offset": 26
    }
  ],
  "location": "TestSteps.verifyWarningMessage(String)"
});
formatter.result({
  "duration": 168619595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 553081928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 645545967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 568692147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 565870430,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5350082195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "18",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 504225143,
  "status": "passed"
});
formatter.after({
  "duration": 1442937658,
  "status": "passed"
});
formatter.uri("Scenario5.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_5_Check save button status",
  "description": "",
  "id": "scenario-5-check-save-button-status",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_5"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user when Im on the advertisement form view, the save button is not active as long the form is not valid.",
  "description": "",
  "id": "scenario-5-check-save-button-status;as-a-user-when-im-on-the-advertisement-form-view,-the-save-button-is-not-active-as-long-the-form-is-not-valid.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 9,
  "name": "I verify Save button status is \"\u003cButtonDisabled\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 12,
  "name": "I verify Save button status is \"\u003cButtonDisabled\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 15,
  "name": "I verify Save button status is \"\u003cButtonDisabled\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Verify Save button is Enabled Now"
    }
  ],
  "line": 18,
  "name": "I verify Save button status is \"\u003cButtonEnabled\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "scenario-5-check-save-button-status;as-a-user-when-im-on-the-advertisement-form-view,-the-save-button-is-not-active-as-long-the-form-is-not-valid.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price",
        "ButtonDisabled",
        "ButtonEnabled"
      ],
      "line": 24,
      "id": "scenario-5-check-save-button-status;as-a-user-when-im-on-the-advertisement-form-view,-the-save-button-is-not-active-as-long-the-form-is-not-valid.;;1"
    },
    {
      "cells": [
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "18",
        "false",
        "true"
      ],
      "line": 25,
      "id": "scenario-5-check-save-button-status;as-a-user-when-im-on-the-advertisement-form-view,-the-save-button-is-not-active-as-long-the-form-is-not-valid.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4088067780,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "As a user when Im on the advertisement form view, the save button is not active as long the form is not valid.",
  "description": "",
  "id": "scenario-5-check-save-button-status;as-a-user-when-im-on-the-advertisement-form-view,-the-save-button-is-not-active-as-long-the-form-is-not-valid.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_5"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 9,
  "name": "I verify Save button status is \"false\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 12,
  "name": "I verify Save button status is \"false\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#Verify Save button is Disabled"
    }
  ],
  "line": 15,
  "name": "I verify Save button status is \"false\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter Price \"18\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Verify Save button is Enabled Now"
    }
  ],
  "line": 18,
  "name": "I verify Save button status is \"true\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"18\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 15437315458,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 26493983,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5342724073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 748140296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 32
    }
  ],
  "location": "TestSteps.verifySaveButtonStatus(Boolean)"
});
formatter.result({
  "duration": 108275632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 571217995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 32
    }
  ],
  "location": "TestSteps.verifySaveButtonStatus(Boolean)"
});
formatter.result({
  "duration": 89583573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 561801893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 32
    }
  ],
  "location": "TestSteps.verifySaveButtonStatus(Boolean)"
});
formatter.result({
  "duration": 99097001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 586917753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 32
    }
  ],
  "location": "TestSteps.verifySaveButtonStatus(Boolean)"
});
formatter.result({
  "duration": 79062920,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5264029572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "18",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 504120385,
  "status": "passed"
});
formatter.after({
  "duration": 1411814190,
  "status": "passed"
});
formatter.uri("Scenario7.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_7_Update advertisement",
  "description": "",
  "id": "scenario-7-update-advertisement",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_7"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user after I update an advertisement I should see the updated entry in the list.",
  "description": "",
  "id": "scenario-7-update-advertisement;as-a-user-after-i-update-an-advertisement-i-should-see-the-updated-entry-in-the-list.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"\u003cAdvertisementName\u003e\" \"\u003cStreet\u003e\" \"\u003cRooms\u003e\" \"\u003cPrice\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select one of the record in list view and click on the \"\u003cColumnName\u003e\" \"\u003cAdvertisementName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter Add \"\u003cNewAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"\u003cNewStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"\u003cNewRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"\u003cNewPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"\u003cNewAdvertisementName\u003e\" \"\u003cNewStreet\u003e\" \"\u003cNewRooms\u003e\" \"\u003cNewPrice\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "scenario-7-update-advertisement;as-a-user-after-i-update-an-advertisement-i-should-see-the-updated-entry-in-the-list.;",
  "rows": [
    {
      "cells": [
        "ColumnName",
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price",
        "NewAdvertisementName",
        "NewStreet",
        "NewRooms",
        "NewPrice"
      ],
      "line": 23,
      "id": "scenario-7-update-advertisement;as-a-user-after-i-update-an-advertisement-i-should-see-the-updated-entry-in-the-list.;;1"
    },
    {
      "cells": [
        "AdvertisementName",
        "HeroKuAppAdd",
        "HeroKuStreet",
        "3",
        "22",
        "NewHeroKuAppAdd",
        "NewHeroKuStreet",
        "4",
        "23"
      ],
      "line": 24,
      "id": "scenario-7-update-advertisement;as-a-user-after-i-update-an-advertisement-i-should-see-the-updated-entry-in-the-list.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3791457344,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "As a user after I update an advertisement I should see the updated entry in the list.",
  "description": "",
  "id": "scenario-7-update-advertisement;as-a-user-after-i-update-an-advertisement-i-should-see-the-updated-entry-in-the-list.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Scenario_7"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Add \"HeroKuAppAdd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify advertisement displayed successfully \"HeroKuAppAdd\" \"HeroKuStreet\" \"3\" \"22\"",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Select one of the record in list view and click on the \"AdvertisementName\" \"HeroKuAppAdd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter Add \"NewHeroKuAppAdd\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Street \"NewHeroKuStreet\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Rooms \"4\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Price \"23\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify advertisement displayed successfully \"NewHeroKuAppAdd\" \"NewHeroKuStreet\" \"4\" \"23\"",
  "matchedColumns": [
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 9126734817,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 22999131,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5645853514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 573319862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 485832137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 396650605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 580893160,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5338956358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "HeroKuStreet",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "22",
      "offset": 79
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 496616453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdvertisementName",
      "offset": 56
    },
    {
      "val": "HeroKuAppAdd",
      "offset": 76
    }
  ],
  "location": "TestSteps.selectAdvertisement(HomePage$ColumnNames,String)"
});
formatter.result({
  "duration": 198184093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuAppAdd",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 1249894801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 467598745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 417720224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 544016548,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5313215139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NewHeroKuAppAdd",
      "offset": 45
    },
    {
      "val": "NewHeroKuStreet",
      "offset": 63
    },
    {
      "val": "4",
      "offset": 81
    },
    {
      "val": "23",
      "offset": 85
    }
  ],
  "location": "TestSteps.verifyAdvertisementData(String,String,String,String)"
});
formatter.result({
  "duration": 509379474,
  "status": "passed"
});
formatter.after({
  "duration": 1446767306,
  "status": "passed"
});
formatter.uri("Scenario9.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario_9_Sort advertisement",
  "description": "",
  "id": "scenario-9-sort-advertisement",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    }
  ]
});
formatter.before({
  "duration": 3514959203,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "",
  "id": "scenario-9-sort-advertisement;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Launch App or delete existing advertisement \"\" and true if want to delete",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "true",
      "offset": 51
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 11498346006,
  "status": "passed"
});
formatter.after({
  "duration": 1425360059,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario_9"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Add \"\u003cAdvertisementName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Street \"\u003cStreet\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Rooms \"\u003cRooms\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Price \"\u003cPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName",
        "Street",
        "Rooms",
        "Price"
      ],
      "line": 20,
      "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;1"
    },
    {
      "cells": [
        "AbcasName",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 21,
      "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;2"
    },
    {
      "cells": [
        "BaseName",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 22,
      "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;3"
    },
    {
      "cells": [
        "CanonName",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 23,
      "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;4"
    },
    {
      "cells": [
        "JhonName",
        "HeroKuStreet",
        "3",
        "22"
      ],
      "line": 24,
      "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3743458080,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    },
    {
      "line": 7,
      "name": "@Scenario_9"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Add \"AbcasName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5683923506,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 233370435,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5364294474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AbcasName",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 744797980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 463418726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 413447127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 420899743,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5256070159,
  "status": "passed"
});
formatter.after({
  "duration": 1408524607,
  "status": "passed"
});
formatter.before({
  "duration": 3862596595,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    },
    {
      "line": 7,
      "name": "@Scenario_9"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Add \"BaseName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 6065748508,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 243523023,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5345930843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BaseName",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 718651182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 490051087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 409161289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 413035177,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5362926969,
  "status": "passed"
});
formatter.after({
  "duration": 1372439690,
  "status": "passed"
});
formatter.before({
  "duration": 3835820901,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    },
    {
      "line": 7,
      "name": "@Scenario_9"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Add \"CanonName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 7697654114,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 343486039,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5397268176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CanonName",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 803654111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 467512391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 389615602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 531962408,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5321854766,
  "status": "passed"
});
formatter.after({
  "duration": 1380100404,
  "status": "passed"
});
formatter.before({
  "duration": 3684713785,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "As a user, when I am on the list view, I can sort the list entries by name, in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user,-when-i-am-on-the-list-view,-i-can-sort-the-list-entries-by-name,-in-ascending-and-descending-order.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    },
    {
      "line": 7,
      "name": "@Scenario_9"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on button to add advertisement",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter Add \"JhonName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Street \"HeroKuStreet\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Rooms \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Price \"22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Save advertisement",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 8170101413,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 235309856,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_click_on_button_to_add_advertisement()"
});
formatter.result({
  "duration": 5352323855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JhonName",
      "offset": 13
    }
  ],
  "location": "TestSteps.I_enter_Add(String)"
});
formatter.result({
  "duration": 915734617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HeroKuStreet",
      "offset": 16
    }
  ],
  "location": "TestSteps.I_enter_Street(String)"
});
formatter.result({
  "duration": 549179727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Rooms(String)"
});
formatter.result({
  "duration": 484779258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 15
    }
  ],
  "location": "TestSteps.I_enter_Price(String)"
});
formatter.result({
  "duration": 505519742,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Save_advertisement()"
});
formatter.result({
  "duration": 5308599458,
  "status": "passed"
});
formatter.after({
  "duration": 1388727290,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "As a user when Im on the list view I can sort the list entries by name in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user-when-im-on-the-list-view-i-can-sort-the-list-entries-by-name-in-ascending-and-descending-order.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on arrow",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify sequency of Advertisements \"\u003cAdvertisementName1\u003e\" \"\u003cAdvertisementName2\u003e\" \"\u003cAdvertisementName3\u003e\" \"\u003cAdvertisementName4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on arrow",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify sequency of Advertisements \"\u003cAdvertisementName4\u003e\" \"\u003cAdvertisementName3\u003e\" \"\u003cAdvertisementName2\u003e\" \"\u003cAdvertisementName1\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user-when-im-on-the-list-view-i-can-sort-the-list-entries-by-name-in-ascending-and-descending-order.;",
  "rows": [
    {
      "cells": [
        "AdvertisementName1",
        "AdvertisementName2",
        "AdvertisementName3",
        "AdvertisementName4"
      ],
      "line": 39,
      "id": "scenario-9-sort-advertisement;as-a-user-when-im-on-the-list-view-i-can-sort-the-list-entries-by-name-in-ascending-and-descending-order.;;1"
    },
    {
      "cells": [
        "AbcasName",
        "BaseName",
        "CanonName",
        "JhonName"
      ],
      "line": 40,
      "id": "scenario-9-sort-advertisement;as-a-user-when-im-on-the-list-view-i-can-sort-the-list-entries-by-name-in-ascending-and-descending-order.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3537816771,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "As a user when Im on the list view I can sort the list entries by name in ascending and descending order.",
  "description": "",
  "id": "scenario-9-sort-advertisement;as-a-user-when-im-on-the-list-view-i-can-sort-the-list-entries-by-name-in-ascending-and-descending-order.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Prerequsite_Scenario_9"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Launch App or delete existing advertisement \"url\" and false if want to delete",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I am on website herokuapp",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click on arrow",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify sequency of Advertisements \"AbcasName\" \"BaseName\" \"CanonName\" \"JhonName\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on arrow",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify sequency of Advertisements \"JhonName\" \"CanonName\" \"BaseName\" \"AbcasName\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 45
    },
    {
      "val": "false",
      "offset": 54
    }
  ],
  "location": "TestSteps.launchAppOrDeleteExistingAdvertisement(String,boolean)"
});
formatter.result({
  "duration": 5614428870,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.I_am_on_website_herokuapp()"
});
formatter.result({
  "duration": 24452635,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clickOnArrow()"
});
formatter.result({
  "duration": 523580781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AbcasName",
      "offset": 35
    },
    {
      "val": "BaseName",
      "offset": 47
    },
    {
      "val": "CanonName",
      "offset": 58
    },
    {
      "val": "JhonName",
      "offset": 70
    }
  ],
  "location": "TestSteps.verifySequencyOfAdvertisements(String,String,String,String)"
});
formatter.result({
  "duration": 5543816590,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.clickOnArrow()"
});
formatter.result({
  "duration": 176947783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JhonName",
      "offset": 35
    },
    {
      "val": "CanonName",
      "offset": 46
    },
    {
      "val": "BaseName",
      "offset": 58
    },
    {
      "val": "AbcasName",
      "offset": 69
    }
  ],
  "location": "TestSteps.verifySequencyOfAdvertisements(String,String,String,String)"
});
formatter.result({
  "duration": 5222999131,
  "status": "passed"
});
formatter.after({
  "duration": 1504148345,
  "status": "passed"
});
});