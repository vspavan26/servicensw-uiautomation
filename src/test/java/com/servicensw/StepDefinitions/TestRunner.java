package com.servicensw.StepDefinitions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/com/servicensw",
        glue = "com.servicensw.StepDefinitions",
        tags = {"@Smoke"},
        plugin = { "html:target/cucumber-report.html",
                "json:target/cucumber.json", "pretty:target/cucumber-pretty.txt",
                "usage:target/cucumber-usage.json",
                "junit:target/cucumber-results.xml"
                }

        )
public class TestRunner extends AbstractTestNGCucumberTests {
	
}