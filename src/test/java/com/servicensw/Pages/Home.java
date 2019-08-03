package com.servicensw.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Home {

	private WebDriver dr = null;

	public Home(WebDriver driver)	{
		this.dr = driver;
	}
	

	public void openURL() {
		dr.get("https://www.service.nsw.gov.au");
		dr.manage().window().maximize();
	}

	public void enterSearchCriteria(String searchCriteria)	{
		dr.findElement(By.xpath("(//input[@name='q'])[2]")).click();
		dr.findElement(By.xpath("(//input[@name='q'])[2]")).sendKeys(searchCriteria);
	}

	public void clickSubmitSearch()	{
		dr.findElement(By.xpath("(//button[@type='submit'])[2]")).click();
	}

	public boolean isCorrectSearchResultPresent(String searchText)	{
		return dr.findElement(By.xpath("//a[text()='"+ searchText +"']")).isDisplayed();
	}
}