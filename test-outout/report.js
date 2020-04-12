$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Logins",
  "description": "",
  "id": "logins",
  "keyword": "Feature"
});
formatter.before({
  "duration": 228815,
  "status": "passed"
});
formatter.before({
  "duration": 101569,
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
  "duration": 6434285168,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 628384460,
  "status": "passed"
});
formatter.after({
  "duration": 258267,
  "status": "passed"
});
formatter.after({
  "duration": 241653,
  "status": "passed"
});
});