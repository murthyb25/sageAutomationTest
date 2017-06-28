$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Banking_sortcode_accName_AccountNo.feature");
formatter.feature({
  "line": 2,
  "name": "Login and creating a current account in Banking site",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "POSITIVE TEST CASE by clicking on Save\u0026 connect bank",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save\u0026-connect-bank",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Tag1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see account created \"\u003caccount name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save\u0026-connect-bank;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code",
        "account number"
      ],
      "line": 22,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save\u0026-connect-bank;;1"
    },
    {
      "cells": [
        "current",
        "Tag1",
        "110011",
        "11346455"
      ],
      "line": 23,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save\u0026-connect-bank;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9096655497,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2903499272,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 8932425222,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 95561582,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 10019444137,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 68669909,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 412768176,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "POSITIVE TEST CASE by clicking on Save\u0026 connect bank",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save\u0026-connect-bank;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Tag1"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "enter \"Tag1\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter \"110011\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter \"11346455\" in the account number filed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see account created \"Tag1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 369746929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag1",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 269252195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "110011",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 612280047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11346455",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 294949880,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_Connect_Bank_button()"
});
formatter.result({
  "duration": 215094083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag1",
      "offset": 30
    }
  ],
  "location": "StepDef.i_should_see_account_created(String)"
});
formatter.result({
  "duration": 99566121,
  "status": "passed"
});
formatter.after({
  "duration": 1591079973,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "POSITIVE TEST CASE by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Tag2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see account created \"\u003caccount name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code",
        "account number"
      ],
      "line": 35,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-button;;1"
    },
    {
      "cells": [
        "current",
        "Tag2",
        "220011",
        "22000000"
      ],
      "line": 36,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6365494841,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 4382891736,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7700625436,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 103880198,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 7514420433,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 56343512,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 359024941,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "POSITIVE TEST CASE by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Tag2"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "enter \"Tag2\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "enter \"220011\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter \"22000000\" in the account number filed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see account created \"Tag2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 471485889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag2",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 330081164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "220011",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 675980746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22000000",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 298849080,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 224178034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag2",
      "offset": 30
    }
  ],
  "location": "StepDef.i_should_see_account_created(String)"
});
formatter.result({
  "duration": 72284285,
  "status": "passed"
});
formatter.after({
  "duration": 1595029412,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Tag3"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name"
      ],
      "line": 45,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-button;;1"
    },
    {
      "cells": [
        "current",
        "Tag3"
      ],
      "line": 46,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6168887922,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2192773354,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7681561738,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 90850454,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 7921784670,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 40749956,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 409076011,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@Tag3"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "enter \"Tag3\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 404570701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag3",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 265627691,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 196037678,
  "status": "passed"
});
formatter.after({
  "duration": 1619789977,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Tag4"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "account number"
      ],
      "line": 56,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-button;;1"
    },
    {
      "cells": [
        "current",
        "tag4",
        "4456258556"
      ],
      "line": 57,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5699776234,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2165330267,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 9921098339,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 133161062,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8221740224,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 47565452,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 399767199,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Tag4"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "enter \"tag4\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "enter \"4456258556\" in the account number filed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 575492089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag4",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 323273772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4456258556",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 320116814,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 195391053,
  "status": "passed"
});
formatter.after({
  "duration": 1584046505,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 60,
  "name": "POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Tag5"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code"
      ],
      "line": 67,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-button;;1"
    },
    {
      "cells": [
        "current",
        "tag5",
        "55555555555"
      ],
      "line": 68,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5319520428,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2260857006,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7712298725,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 82543182,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 13881028637,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 44950995,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 395781702,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 59,
      "name": "@Tag5"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "enter \"tag5\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "enter \"55555555555\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 373385615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag5",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 308925253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55555555555",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 820909497,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 191842716,
  "status": "passed"
});
formatter.after({
  "duration": 1585562186,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 71,
  "name": "POSITIVE TEST CASE by clicking on Save",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Tag6"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I should see account created \"\u003caccount name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code",
        "account number"
      ],
      "line": 80,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save;;1"
    },
    {
      "cells": [
        "current",
        "Tag6",
        "666666",
        "63645445747"
      ],
      "line": 81,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4706065840,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2105049471,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 8009744757,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 87689850,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 7910452926,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 13070664,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 416343253,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "POSITIVE TEST CASE by clicking on Save",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 70,
      "name": "@Tag6"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "enter \"Tag6\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "enter \"666666\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "enter \"63645445747\" in the account number filed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I should see account created \"Tag6\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 394858356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag6",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 383723516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "666666",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 615237264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "63645445747",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 312932628,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 241870691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag6",
      "offset": 30
    }
  ],
  "location": "StepDef.i_should_see_account_created(String)"
});
formatter.result({
  "duration": 67028225,
  "status": "passed"
});
formatter.after({
  "duration": 1628742253,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 84,
  "name": "POSITIVE TEST CASE by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-and-connect-bank-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@Tag7"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I should see account created \"\u003caccount name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-and-connect-bank-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code",
        "account number"
      ],
      "line": 93,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-and-connect-bank-button;;1"
    },
    {
      "cells": [
        "current",
        "Tag7",
        "770011",
        "770075800"
      ],
      "line": 94,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-and-connect-bank-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4724858490,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2149195426,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7897497730,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 82507124,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8405442187,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 47364901,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 432700929,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "POSITIVE TEST CASE by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-clicking-on-save-and-connect-bank-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 83,
      "name": "@Tag7"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 85,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "enter \"Tag7\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "enter \"770011\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "enter \"770075800\" in the account number filed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I should see account created \"Tag7\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 450785775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag7",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 254033811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "770011",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 603475651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "770075800",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 263748183,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 213379067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag7",
      "offset": 30
    }
  ],
  "location": "StepDef.i_should_see_account_created(String)"
});
formatter.result({
  "duration": 61204141,
  "status": "passed"
});
formatter.after({
  "duration": 1566667031,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 97,
  "name": "POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-and-connect-bank-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Tag8"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-and-connect-bank-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name"
      ],
      "line": 103,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-and-connect-bank-button;;1"
    },
    {
      "cells": [
        "current",
        "Tag8"
      ],
      "line": 104,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-and-connect-bank-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4649369439,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2075652733,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7501609068,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 103969332,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8735319964,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 35873121,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 302405114,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "POSITIVE TEST CASE by not giving sortcode and accountnumber by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-accountnumber-by-clicking-on-save-and-connect-bank-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 96,
      "name": "@Tag8"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "enter \"Tag8\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 444052931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tag8",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 307866181,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 226384097,
  "status": "passed"
});
formatter.after({
  "duration": 1546754131,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-and-connect-bank-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Tag9"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 113,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-and-connect-bank-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "account number"
      ],
      "line": 114,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-and-connect-bank-button;;1"
    },
    {
      "cells": [
        "current",
        "tag9",
        "999258556"
      ],
      "line": 115,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-and-connect-bank-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4878438084,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2244316200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7935630798,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 92688232,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8291419371,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 52567479,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 373747012,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "POSITIVE TEST CASE by not giving sortcode and giving acc number by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-sortcode-and-giving-acc-number-by-clicking-on-save-and-connect-bank-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 106,
      "name": "@Tag9"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "enter \"tag9\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "enter \"999258556\" in the account number filed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 340603007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag9",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 290148403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999258556",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 265174324,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 222575246,
  "status": "passed"
});
formatter.after({
  "duration": 1587516241,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 118,
  "name": "POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-and-connect-bank-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@Tag10"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 124,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-and-connect-bank-button;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code"
      ],
      "line": 125,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-and-connect-bank-button;;1"
    },
    {
      "cells": [
        "current",
        "tag10",
        "10111111100"
      ],
      "line": 126,
      "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-and-connect-bank-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5106516533,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2758679102,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 7377606100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 90851265,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8069568540,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 41112973,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 303971843,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "POSITIVE TEST CASE by not giving accountnumber and giving sortcode by clicking on Save and connect bank button",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;positive-test-case-by-not-giving-accountnumber-and-giving-sortcode-by-clicking-on-save-and-connect-bank-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 117,
      "name": "@Tag10"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "enter \"tag10\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "enter \"10111111100\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "click on Save button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 391322580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tag10",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 264807254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10111111100",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 710059441,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_button()"
});
formatter.result({
  "duration": 202315940,
  "status": "passed"
});
formatter.after({
  "duration": 1553995848,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 129,
  "name": "Negative Test case by giving blank values while creating new current account",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-blank-values-while-creating-new-current-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@Tag11"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "enter \"\u003caccount name\u003e\" in the account name input field",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "enter \"\u003csort code\u003e\" in the sort code input field",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "enter \"\u003caccount number\u003e\" in the account number filed",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-blank-values-while-creating-new-current-account;",
  "rows": [
    {
      "cells": [
        "account type",
        "account name",
        "sort code",
        "account number"
      ],
      "line": 138,
      "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-blank-values-while-creating-new-current-account;;1"
    },
    {
      "cells": [
        "current",
        "",
        "",
        ""
      ],
      "line": 139,
      "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-blank-values-while-creating-new-current-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4614210199,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2399099910,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 8716624957,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 95731746,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8151679018,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 44308421,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 343288365,
  "status": "passed"
});
formatter.scenario({
  "line": 139,
  "name": "Negative Test case by giving blank values while creating new current account",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-blank-values-while-creating-new-current-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 128,
      "name": "@Tag11"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 130,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 131,
  "name": "enter \"\" in the account name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "enter \"\" in the sort code input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "enter \"\" in the account number filed",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 354369319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_name_input_field(String)"
});
formatter.result({
  "duration": 151780711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_sort_code_input_field(String)"
});
formatter.result({
  "duration": 436325839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_filed(String)"
});
formatter.result({
  "duration": 142166008,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_Connect_Bank_button()"
});
formatter.result({
  "duration": 219572652,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.I_should_see_error_message()"
});
formatter.result({
  "duration": 93968112,
  "status": "passed"
});
formatter.after({
  "duration": 1519165594,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 142,
  "name": "Negative Test case by giving over the limit of actual digits in acc number field",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-over-the-limit-of-actual-digits-in-acc-number-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 141,
      "name": "@Tag12"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "I select \"\u003caccount type\u003e\" from the account type drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "enter \"\u003caccount number\u003e\" in the account number input field",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-over-the-limit-of-actual-digits-in-acc-number-field;",
  "rows": [
    {
      "cells": [
        "account type",
        "account number"
      ],
      "line": 148,
      "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-over-the-limit-of-actual-digits-in-acc-number-field;;1"
    },
    {
      "cells": [
        "current",
        "3333333333333333344445845"
      ],
      "line": 149,
      "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-over-the-limit-of-actual-digits-in-acc-number-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4660736431,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I navigate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I successfully logged in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Banking tab from the Global header",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I  should see Add a new account option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add a new account option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_navigate_to_url()"
});
formatter.result({
  "duration": 2087833274,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_login_with_valid_credentials()"
});
formatter.result({
  "duration": 8360916198,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_successfully_logged_in()"
});
formatter.result({
  "duration": 81624699,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Banking_tab_from_the_Global_header()"
});
formatter.result({
  "duration": 8342873488,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_see_Add_a_new_account_option()"
});
formatter.result({
  "duration": 53671523,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_Add_a_new_account_option()"
});
formatter.result({
  "duration": 376795794,
  "status": "passed"
});
formatter.scenario({
  "line": 149,
  "name": "Negative Test case by giving over the limit of actual digits in acc number field",
  "description": "",
  "id": "login-and-creating-a-current-account-in-banking-site;negative-test-case-by-giving-over-the-limit-of-actual-digits-in-acc-number-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 141,
      "name": "@Tag12"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 143,
  "name": "I select \"current\" from the account type drop down",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "enter \"3333333333333333344445845\" in the account number input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "click on Save\u0026 Connect Bank button",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "current",
      "offset": 10
    }
  ],
  "location": "StepDef.i_select_from_the_account_type_drop_down(String)"
});
formatter.result({
  "duration": 305081155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333333333333333344445845",
      "offset": 7
    }
  ],
  "location": "StepDef.enter_in_the_account_number_input_field(String)"
});
formatter.result({
  "duration": 96532330,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.click_on_Save_Connect_Bank_button()"
});
formatter.result({
  "duration": 194564944,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.I_should_see_error_message()"
});
formatter.result({
  "duration": 135744728,
  "status": "passed"
});
formatter.after({
  "duration": 1523582175,
  "status": "passed"
});
});