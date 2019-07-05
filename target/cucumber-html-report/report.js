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
      "cells": [
        "30",
        "Employed",
        "82000",
        "4%",
        "17.5%",
        "null",
        "null",
        "null",
        "High",
        "null"
      ],
      "line": 35,
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;2"
    },
    {
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
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;3"
    },
    {
      "cells": [
        "55",
        "Not employed",
        "null",
        "null",
        "10.5%",
        "$140000",
        "$10",
        "Annually",
        "Medium",
        "$200000"
      ],
      "line": 37,
      "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;4"
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
  "duration": 16531203600,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_navigate_kiwisaver_retirement_calculators_page()"
});
formatter.result({
  "duration": 17606263200,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_validate_infomation_icons_of_all_fields_available_on_the_page()"
});
formatter.result({
  "duration": 27950415200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
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
  "name": "selects employment status  \"Employed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "enters salary wages \"82000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "select member contribution \"4%\"",
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
  "name": "enters current kiwisaver balance \"null\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enters voluntary contributions \"null\" and \"null\"",
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
  "name": "enters saving goal \"null\"",
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
      "val": "30",
      "offset": 25
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.user_enters_Current_age(String)"
});
formatter.result({
  "duration": 1582492100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employed",
      "offset": 28
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects_employment_status(String)"
});
formatter.result({
  "duration": 3290675800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "82000",
      "offset": 21
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_salary_wages(String)"
});
formatter.result({
  "duration": 508858500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4%",
      "offset": 28
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.select_member_contribution(String)"
});
formatter.result({
  "duration": 1511701600,
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
  "duration": 1219657000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 34
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_current_kiwisaver_balance(String)"
});
formatter.result({
  "duration": 15452000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 32
    },
    {
      "val": "null",
      "offset": 43
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_voluntary_contributions_and(String,String)"
});
formatter.result({
  "duration": 2108729300,
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
  "duration": 531278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 20
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_saving_goal(String)"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.clicks_on_View_your_Kiwisaver_retirement_projections_button()"
});
formatter.result({
  "duration": 1626658400,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.kiwisaver_retirement_projections_display()"
});
formatter.result({
  "duration": 611539800,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 1103566900,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-KVFT8E4\u0027, ip: \u0027169.254.192.81\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\r\n\tat utility.ConfigUtility.fnCaptureEncodedImage(ConfigUtility.java:82)\r\n\tat utility.ConfigUtility.fnGenerateReport(ConfigUtility.java:62)\r\n\tat stepDefinition.KiwiSaverCalculatorStepDefinition.user_close_browser(KiwiSaverCalculatorStepDefinition.java:177)\r\n\tat ✽.And User close browser(KiwiSaverCalculator.feature:31)\r\n",
  "status": "failed"
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
  "duration": 26957956700,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_navigate_kiwisaver_retirement_calculators_page()"
});
formatter.result({
  "duration": 12214207600,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_validate_infomation_icons_of_all_fields_available_on_the_page()"
});
formatter.result({
  "duration": 28005179200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Calculate KiwiSaver returement projected balance",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;3",
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
  "duration": 1531347500,
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
  "duration": 3229800000,
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
  "duration": 120700,
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
  "duration": 999700200,
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
  "duration": 1195363500,
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
  "duration": 515231800,
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
  "duration": 4832466500,
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
  "duration": 558421500,
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
  "duration": 495878700,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.clicks_on_View_your_Kiwisaver_retirement_projections_button()"
});
formatter.result({
  "duration": 1619354500,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.kiwisaver_retirement_projections_display()"
});
formatter.result({
  "duration": 570286500,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 972892100,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-KVFT8E4\u0027, ip: \u0027169.254.192.81\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\r\n\tat utility.ConfigUtility.fnCaptureEncodedImage(ConfigUtility.java:82)\r\n\tat utility.ConfigUtility.fnGenerateReport(ConfigUtility.java:62)\r\n\tat stepDefinition.KiwiSaverCalculatorStepDefinition.user_close_browser(KiwiSaverCalculatorStepDefinition.java:177)\r\n\tat ✽.And User close browser(KiwiSaverCalculator.feature:31)\r\n",
  "status": "failed"
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
  "duration": 19755033400,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_navigate_kiwisaver_retirement_calculators_page()"
});
formatter.result({
  "duration": 10072527200,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_validate_infomation_icons_of_all_fields_available_on_the_page()"
});
formatter.result({
  "duration": 27941182000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Calculate KiwiSaver returement projected balance",
  "description": "",
  "id": "validating-kiwi-saver-retirement-calculator;calculate-kiwisaver-returement-projected-balance;;4",
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
  "name": "User enters Current age \"55\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "selects employment status  \"Not employed\"",
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
  "name": "enters current kiwisaver balance \"$140000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "enters voluntary contributions \"$10\" and \"Annually\"",
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
  "name": "enters saving goal \"$200000\"",
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
      "val": "55",
      "offset": 25
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.user_enters_Current_age(String)"
});
formatter.result({
  "duration": 1534314000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not employed",
      "offset": 28
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.selects_employment_status(String)"
});
formatter.result({
  "duration": 3240150600,
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
  "duration": 39800,
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
  "duration": 999515200,
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
  "duration": 1203653200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$140000",
      "offset": 34
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_current_kiwisaver_balance(String)"
});
formatter.result({
  "duration": 505156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$10",
      "offset": 32
    },
    {
      "val": "Annually",
      "offset": 42
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_voluntary_contributions_and(String,String)"
});
formatter.result({
  "duration": 4804505400,
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
  "duration": 565545600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$200000",
      "offset": 20
    }
  ],
  "location": "KiwiSaverCalculatorStepDefinition.enters_saving_goal(String)"
});
formatter.result({
  "duration": 513063700,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.clicks_on_View_your_Kiwisaver_retirement_projections_button()"
});
formatter.result({
  "duration": 1596830100,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.kiwisaver_retirement_projections_display()"
});
formatter.result({
  "duration": 579173300,
  "status": "passed"
});
formatter.match({
  "location": "KiwiSaverCalculatorStepDefinition.user_close_browser()"
});
formatter.result({
  "duration": 981006900,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-KVFT8E4\u0027, ip: \u0027169.254.192.81\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:134)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:335)\r\n\tat utility.ConfigUtility.fnCaptureEncodedImage(ConfigUtility.java:82)\r\n\tat utility.ConfigUtility.fnGenerateReport(ConfigUtility.java:62)\r\n\tat stepDefinition.KiwiSaverCalculatorStepDefinition.user_close_browser(KiwiSaverCalculatorStepDefinition.java:177)\r\n\tat ✽.And User close browser(KiwiSaverCalculator.feature:31)\r\n",
  "status": "failed"
});
});