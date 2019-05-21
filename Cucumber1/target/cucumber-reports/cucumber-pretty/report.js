$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Login with multiple users",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "Login with positive credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I want to login with positive credential",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.iWantLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Atleast two user able to login",
  "keyword": "And "
});
formatter.match({
  "location": "Login.twoUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password and email",
  "keyword": "When "
});
formatter.match({
  "location": "Login.enterPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.userAbleToLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to see the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "Login.dashboard()"
});
formatter.result({
  "status": "passed"
});
});