$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("KiwiSaverCalculator.feature");
formatter.feature({
  "line": 2,
  "name": "Validating kiwi saver retirement calculator",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@kiwisaver"
    }
  ]
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Calculate KiwiSaver returement projected balance",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Execute"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User enters Current age \"\u003ccurrent age\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "selects \"\u003cemployment status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select \"\u003cmember contribution\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select PIR \"\u003cPIR\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enters current kiwisaver balance \"\u003ccurrent kiwisaver balance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enters voluntary contributions \"\u003cVoluntary contributions\u003e\" and \"\u003cFrequency\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "selects risk profile \"\u003crisk profile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "enters saving goal \"\u003csavings goal\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on View your Kiwisaver retirement projections button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Kiwisaver retirement projections display",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;",
  "rows": [
    {
      "cells": [
        "current age",
        "employment status",
        "salary",
        "member contribution",
        "PIR",
        "current kiwisaver balance",
        "Voluntary contributions",
        "Frequency",
        "risk profile",
        "savings goal"
      ],
      "line": 33,
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;1"
    },
    {
      "cells": [
        "30",
        "Employed",
        "82000",
        "4%",
        "17.5%",
        "",
        "",
        "",
        "High",
        ""
      ],
      "line": 34,
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Navigating to kiwisaver retirement calculator page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User invoke application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigate kiwisaver retirement calculators page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User validate infomation icons of all fields available on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_invoke_application()"
});
formatter.result({
  "duration": 36095312500,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_navigate_kiwisaver_retirement_calculators_page()"
});
formatter.result({
  "duration": 17867063100,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_validate_infomation_icons_of_all_fields_available_on_the_page()"
});
formatter.result({
  "duration": 26234448900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Calculate KiwiSaver returement projected balance",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@kiwisaver"
    },
    {
      "line": 17,
      "name": "@Execute"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User enters Current age \"30\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "selects \"Employed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters \"82000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select \"4%\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select PIR \"17.5%\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enters current kiwisaver balance \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enters voluntary contributions \"\" and \"\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "selects risk profile \"High\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "enters saving goal \"\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "clicks on View your Kiwisaver retirement projections button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Kiwisaver retirement projections display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 25
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.user_enters_Current_age(String)"
});
formatter.result({
  "duration": 3607900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employed",
      "offset": 9
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects(String)"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "82000",
      "offset": 8
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters(String)"
});
formatter.result({
  "duration": 91600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4%",
      "offset": 8
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.select(String)"
});
formatter.result({
  "duration": 112100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.5%",
      "offset": 12
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.select_PIR(String)"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_current_kiwisaver_balance(String)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_voluntary_contributions_and(String,String)"
});
formatter.result({
  "duration": 127800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 22
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects_risk_profile(String)"
});
formatter.result({
  "duration": 92300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_saving_goal(String)"
});
formatter.result({
  "duration": 67000,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.clicks_on_View_your_Kiwisaver_retirement_projections_button()"
});
formatter.result({
  "duration": 33600,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.kiwisaver_retirement_projections_display()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
});