package com.testcases;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features={"src/test/resources/Features/"},
		
		plugin = {
	              
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        }
		)
public class MyRunner extends AbstractTestNGCucumberTests{

}
