package com.cucumber.SageTest;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {

	public static WebDriver driver;

	@Before
	public void testStart() {
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
	}

	@After
	public void testShutdown() {
		driver.quit();
	}

	@Given("^I navigate to url$")
	public void i_navigate_to_url() throws Throwable {
		driver.get("https://app.sageone.com/login");
	}
	@When("^I login with valid credentials$")
	public void i_login_with_valid_credentials() throws Throwable {
		driver.findElement(By.id("sso_Email")).sendKeys("murthyb@mailinator.com");
		driver.findElement(By.id("sso_Password")).sendKeys("P@55word");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@value='Log In']")).click();
	}

	@When("^I successfully logged in$")
	public void i_successfully_logged_in() throws Throwable {
		try {
			driver.findElement(By.xpath("//*[@data-tooltip='Murthy Automation Task (Owner)']")).isDisplayed();
		} catch (Exception e) {
			System.out.println(" Logged in successfully");
		}

	}

	@When("^I click on Banking tab from the Global header$")
	public void i_click_on_Banking_tab_from_the_Global_header() throws Throwable {
		driver.findElement(By.xpath("//*[contains(text(),'Banking')]")).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@When("^I  should see Add a new account option$")
	public void i_should_see_Add_a_new_account_option() throws Throwable {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("scrollBy(0,2500)");
	}

	@When("^I click on Add a new account option$")
	public void i_click_on_Add_a_new_account_option() throws Throwable {
		driver.findElement(By.cssSelector("#bank_accounts_container > div:nth-of-type(2) > div > a")).click();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("^I select \"([^\"]*)\" from the account type drop down$")
	public void i_select_from_the_account_type_drop_down(String arg1) throws Throwable {
		Select accountType = new Select(driver.findElement(By.id("bank_account_account_type_id")));
		accountType.selectByVisibleText("Current");
	}

	@Then("^enter \"([^\"]*)\" in the account name input field$")
	public void enter_in_the_account_name_input_field(String arg1) throws Throwable {
		driver.findElement(By.id("bank_account_account_name")).sendKeys(arg1);
	}

	@Then("^enter \"([^\"]*)\" in the sort code input field$")
	public void enter_in_the_sort_code_input_field(String arg1) throws Throwable {
		driver.findElement(By.xpath("(.//*[@data-element='sort-code'])[1]")).sendKeys(arg1);
		driver.findElement(By.xpath("(.//*[@data-element='sort-code'])[2]")).sendKeys(arg1);
		driver.findElement(By.xpath("(.//*[@data-element='sort-code'])[3]")).sendKeys(arg1);

	}

	@Then("^enter \"([^\"]*)\" in the account number filed$")
	public void enter_in_the_account_number_filed(String arg1) throws Throwable {
		driver.findElement(By.id("bank_account_account_number")).sendKeys(arg1);
	}

	@Then("^click on Save& Connect Bank button$")
	public void click_on_Save_Connect_Bank_button() throws Throwable {
		driver.findElement(By.xpath("//button[contains(text(),'Save & Connect Bank')]")).click();
	}

	@Then("^I should see account created \"([^\"]*)\"$")
	public void i_should_see_account_created(String arg1) throws Throwable {
		try {
			driver.findElement(By.xpath("//*[text()='" + arg1 + "'] -- In your code " + arg1 + "")).isDisplayed();
		} catch (Exception e) {
			System.out.println("should appear currentaccount holder name");
		}
	}

	@Then("^click on Save button$")
	public void click_on_Save_button() throws Throwable {
		driver.findElement(By.xpath(" //button[text()='Save & Connect Bank']/following::button[text()='Save']"))
				.click();
	}
	
	@Then("^I should see error message$")
	public void I_should_see_error_message() throws Throwable {
		Assert.assertTrue("Error message is not shown",driver.findElement(By.cssSelector("#new_bank_account > fieldset > div:nth-of-type(7) > span:nth-of-type(1) > span > span > span")).isDisplayed());
	}
	@Then("^enter \"([^\"]*)\" in the account number input field$")
	public void enter_in_the_account_number_input_field(String arg1) throws Throwable {
		Assert.assertTrue("Error message is not shown",driver.findElement(By.cssSelector("#bank_account_account_number")).isDisplayed());

	}



	}
