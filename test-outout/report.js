$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Logins",
  "description": "",
  "id": "logins",
  "keyword": "Feature"
});
formatter.before({
  "duration": 460273,
  "status": "passed"
});
formatter.before({
  "duration": 707589,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Access the Facebook site",
  "description": "",
  "id": "logins;access-the-facebook-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the facebook Application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.facebookURL()"
});
formatter.result({
  "duration": 7263264095,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 625496710,
  "status": "passed"
});
formatter.after({
  "duration": 370786,
  "status": "passed"
});
formatter.after({
  "duration": 243541,
  "status": "passed"
});
});