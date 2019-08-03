package com.servicensw.StepDefinitions;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
 
public class ScenarioHooks {
	
	static WebDriver wd;	
	
	@Before
    public void beforeScenario(){
		System.setProperty("webdriver.chrome.driver", "src/test//java//com//servicensw//resources//chromedriver.exe");
		wd = new ChromeDriver();
		wd.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS) ;
    }	
	
	@After
    public void afterScenario(){
       wd.quit();
    }
}