package com.testcases;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	
	@Given("I want to login with positive credential")
	public void iWantLogin()
	{
		System.out.println("I want to login with positive credential");
	}
	
	@And("Atleast two user able to login")
	public void twoUsers()
	{
		System.out.println("Atleast two user able to login");
	}
	
    @When ("I enter the password and email")
    public void enterPassword()
    {
    	System.out.println("I enter the password and email");
    }
    
    @Then("User should be able to login")
    
    public void userAbleToLogin()
    {
    	System.out.println("User should be able to login");
    }
    
    @And ("User should able to see the dashboard")
    public void dashboard()
    {
    	System.out.println("User should able to see the dashboard");
    }
	

}
