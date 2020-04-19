$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "Logins",
  "description": "",
  "id": "logins",
  "keyword": "Feature"
});
formatter.before({
  "duration": 803118,
  "status": "passed"
});
formatter.before({
  "duration": 78160,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Access the Amazon site",
  "description": "",
  "id": "logins;access-the-amazon-site",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Open the amazon Application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.amazonURL()"
});
formatter.result({
  "duration": 5262438322,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1098382135,
  "status": "passed"
});
formatter.after({
  "duration": 44177,
  "status": "passed"
});
formatter.after({
  "duration": 48708,
  "status": "passed"
});
});