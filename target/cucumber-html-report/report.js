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
  "name": "selects employment status  \"\u003cemployment status\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters salary wages \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select member contribution \"\u003cmember contribution\u003e\"",
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
formatter.step({
  "line": 31,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
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
      "line": 34,
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;1"
    },
    {
      "comments": [
        {
          "line": 35,
          "value": "#| 30\t\t\t\t\t|\tEmployed\t\t\t\t\t| 82000\t\t|4%\t\t\t\t\t\t\t\t\t\t| 17.5%\t|null|null|null|\tHigh\t\t\t\t|null|"
        }
      ],
      "cells": [
        "45",
        "Self-employed",
        "null",
        "null",
        "10.5%",
        "$100000",
        "$90",
        "Fortnightly",
        "Medium",
        "$290000"
      ],
      "line": 36,
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
  "duration": 28282943800,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_navigate_kiwisaver_retirement_calculators_page()"
});
formatter.result({
  "duration": 14172207900,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_validate_infomation_icons_of_all_fields_available_on_the_page()"
});
formatter.result({
  "duration": 28057027600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 35,
      "value": "#| 30\t\t\t\t\t|\tEmployed\t\t\t\t\t| 82000\t\t|4%\t\t\t\t\t\t\t\t\t\t| 17.5%\t|null|null|null|\tHigh\t\t\t\t|null|"
    }
  ],
  "line": 36,
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
  "name": "User enters Current age \"45\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "selects employment status  \"Self-employed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters salary wages \"null\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select member contribution \"null\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select PIR \"10.5%\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "enters current kiwisaver balance \"$100000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enters voluntary contributions \"$90\" and \"Fortnightly\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "selects risk profile \"Medium\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "enters saving goal \"$290000\"",
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
formatter.step({
  "line": 31,
  "name": "User close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 25
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.user_enters_Current_age(String)"
});
formatter.result({
  "duration": 1572325600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Self-employed",
      "offset": 28
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects_employment_status(String)"
});
formatter.result({
  "duration": 3266629000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 21
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_salary_wages(String)"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 28
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.select_member_contribution(String)"
});
formatter.result({
  "duration": 1000088300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.5%",
      "offset": 12
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.select_PIR(String)"
});
formatter.result({
  "duration": 1215124800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100000",
      "offset": 34
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_current_kiwisaver_balance(String)"
});
formatter.result({
  "duration": 498795800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90",
      "offset": 32
    },
    {
      "val": "Fortnightly",
      "offset": 42
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_voluntary_contributions_and(String,String)"
});
formatter.result({
  "duration": 4785249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Medium",
      "offset": 22
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects_risk_profile(String)"
});
formatter.result({
  "duration": 548213100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$290000",
      "offset": 20
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_saving_goal(String)"
});
formatter.result({
  "duration": 505034900,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.clicks_on_View_your_Kiwisaver_retirement_projections_button()"
});
formatter.result({
  "duration": 1638988800,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.kiwisaver_retirement_projections_display()"
});
formatter.result({
  "duration": 572130800,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 1059508500,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-KVFT8E4\u0027, ip: \u0027169.254.192.81\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\r\n\tat utility.ConfigUtility.fnCaptureEncodedImage(ConfigUtility.java:82)\r\n\tat utility.ConfigUtility.fnGenerateReport(ConfigUtility.java:62)\r\n\tat stepDefinition.KiwiSaverCalculatorStepDefinition.user_close_browser(KiwiSaverCalculatorStepDefinition.java:177)\r\n\tat ✽.And User close browser(KiwiSaverCalculator.feature:31)\r\n",
  "status": "failed"
});
});