package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import objectrepo.ObjectRepository;
import utility.ConfigUtility;

public class KiwiSaverCalculatorStepDefinition extends ConfigUtility implements ObjectRepository {

	public static WebDriver driver;
	WebElement element;
	Actions action;

	@Given("^User invoke application$")
	public void user_invoke_application() throws Throwable {
		ConfigUtility.status = false;
		if (ConfigUtility.browser.equals("chrome")) {

			System.setProperty("webdriver.chrome.driver", "D:/ChromeDriver/chromedriver.exe");
			driver = new ChromeDriver();
			driver.get(ConfigUtility.application_url);
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(ConfigUtility.implicitwaittime, TimeUnit.SECONDS);
			driver.manage().timeouts().pageLoadTimeout(ConfigUtility.pageloadtimeout, TimeUnit.SECONDS);
			ConfigUtility.status = true;
			ConfigUtility.fnGenerateReport(ConfigUtility.status, "Application invoke successully.", "");
		}

	}

	@Given("^User navigate kiwisaver retirement calculators page$")
	public void user_navigate_kiwisaver_retirement_calculators_page() throws Throwable {
		ConfigUtility.status = false;
		action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath(kiwisavericon))).build().perform();
		ConfigUtility.status = true;
		ConfigUtility.fnGenerateReport(ConfigUtility.status, "mouse hover to kiwi saver icon.", "");
		action.moveToElement(driver.findElement(By.xpath(kiwisavercalculatorbutton))).build().perform();
		driver.findElement(By.xpath(kiwisavercalculatorbutton)).click();
		ConfigUtility.status = true;
		ConfigUtility.fnGenerateReport(ConfigUtility.status, "kiwi saver calculator button clicked.", "");
		driver.findElement(By.xpath(clickheretogetstartedbutton)).click();
		ConfigUtility.status = true;
		ConfigUtility.fnGenerateReport(ConfigUtility.status, "click here to get started button clicked.", "");
		System.out.println("navigation completed.");

	}

	@Then("^User validate infomation icons of all fields available on the page$")
	public void user_validate_infomation_icons_of_all_fields_available_on_the_page() throws Throwable {
		ConfigUtility.status = false;
		String iconname = "";
		try {
			if (driver.findElement(By.xpath(KiwiSaverRetirementCalculatorheader)).isDisplayed()) {
				ConfigUtility.status = true;
				System.out.println("KiwiSaver Retirement Calculator displayed.");
				ConfigUtility.fnGenerateReport(ConfigUtility.status, "KiwiSaver Retirement Calculator displayed.", "");
				driver.switchTo().frame(driver.findElement(By.xpath(kiwisavercalculatorframe)));
				System.out.println("successfully switch to frame");
				ConfigUtility.fnGenerateReport(ConfigUtility.status, "successfully switch to frame inside a webpage.",
						"");
				List<WebElement> iconslist = driver.findElements(By.xpath(kiwisavercalculatoricons));
				System.out.println("Icons list created");
				List<WebElement> fieldnamelist = driver.findElements(By.xpath(kiwisavercalculatorfieldname));
				System.out.println("field name list created");
				driver.manage().timeouts().pageLoadTimeout(ConfigUtility.pageloadtimeout, TimeUnit.SECONDS);
				Thread.sleep(10000);
				for (int i = 0; i <= iconslist.size() - 4; i++) {
					if (!(i == 3)) {
						if (iconslist.get(i).isDisplayed()) {
							for (int j = i; j <= i; j++) {
								if (!(j == 3)) {
									if (i >= 4) {
										j = i + 1;
									}
									iconname = fieldnamelist.get(j).getAttribute("label");
									System.out.println(fieldnamelist.get(j).getAttribute("label"));
								}
							}

							iconslist.get(i).click();
							Thread.sleep(2000);
							ConfigUtility.status = true;
							ConfigUtility.fnGenerateReport(ConfigUtility.status,
									"KiwiSaver Retirement Calculator information :: " + iconname
											+ " :: icon displayed and clicked.",
									"");
							System.out.println("element clicked.");

						} else {
							ConfigUtility.status = false;
							ConfigUtility.fnGenerateReport(ConfigUtility.status,
									"KiwiSaver Retirement Calculator information :: " + iconname
											+ " :: icon not displayed.",
									"");
						}
					}

				}

			} else {
				System.out.println("header is not visible.");
				ConfigUtility.extentlogger.log(LogStatus.FAIL, "KiwiSaver Retirement Calculator is not displayed.");
			}
		} catch (Exception e) {
			ConfigUtility.extentlogger.log(LogStatus.FAIL,
					"KiwiSaver Retirement Calculator information icon not displayed.");
			e.printStackTrace();
		}
	}
	
	
	@Given("^user clicks on Current age information icon$")
	public void user_clicks_on_Current_age_information_icon() throws Throwable {
		ConfigUtility.status = false;
		List<WebElement> iconlist = driver.findElements(By.xpath(kiwisavercalculatoricons));
		if(iconlist.get(0).isDisplayed())
		{
			iconlist.get(0).click();
			Thread.sleep(2000);
			ConfigUtility.status = true;
			ConfigUtility.fnGenerateReport(ConfigUtility.status, "current age information message icon displayed and clicked.",
					"");
		}
		else
		{
			ConfigUtility.status = false;
			ConfigUtility.fnGenerateReport(ConfigUtility.status, "current age information message icon not displayed.",
					"");
		}
	}

	@Then("^\"(.*?)\" information message is displayed$")
	public void information_message_is_displayed(String infomsg) throws Throwable {
		ConfigUtility.status = false;
		String tempcurrentageinfomsg;
		if(driver.findElement(By.xpath(currentageinformationmessage)).isDisplayed())
		{
			Thread.sleep(2000);
			ConfigUtility.status = true;
			tempcurrentageinfomsg = driver.findElement(By.xpath(currentageinformationmessage)).getText();
			if(tempcurrentageinfomsg.equals(infomsg))
			{
				ConfigUtility.fnGenerateReport(ConfigUtility.status, "current age information message :: " + infomsg +" is displayed as expected.",
						"");
			}
			else
			{
				ConfigUtility.status = false;
				ConfigUtility.fnGenerateReport(ConfigUtility.status, "Actual current age information message :: "+infomsg+ ",  Expected message :: "+ tempcurrentageinfomsg,
						"");
			}
		}
		
	}
		
	
	@Then("^User close browser$")
	public void user_close_browser() throws Throwable {
		ConfigUtility.status = false;
		driver.quit();
		ConfigUtility.status = true;
		ConfigUtility.fnGenerateReport(ConfigUtility.status, "Browser closed successfully.", "");
	}

	@Given("^User enters Current age \"(.*?)\"$")
	public void user_enters_Current_age(String currentage) throws Throwable {

		driver.findElement(By.xpath("//*[@class='hot-label ng-binding ng-scope']")).click();

		Thread.sleep(1000);
	   WebElement CurrAgeinput = driver.findElement(By.xpath(CurrentAgeInput));
	   if(CurrAgeinput.isDisplayed())
	   {  
		   CurrAgeinput.sendKeys(currentage);
		   ConfigUtility.status = true;
		   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Value entered in Current Age ::" + currentage,	"");
	   }
	   else
	   {
		   ConfigUtility.status = false;
		   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Current Age text box not displayed", "");
	   }
	}

	
	@Given("^selects employment status  \"(.*?)\"$")
	public void selects_employment_status(String employeestatus) throws Throwable {
		try {
			Thread.sleep(1000);
			if(driver.findElement(By.xpath("(//*[@class='well-value ng-binding'])[position()=1]")).isDisplayed())
	
		{
			driver.findElement(By.xpath("(//*[@class='well-value ng-binding'])[position()=1]")).click();
			System.out.println("employeestatus clicked");
			Thread.sleep(2000);
			System.out.println(employeestatus.trim());
			driver.findElement(By.xpath("//div[@help-id='EmploymentStatus']//ul/li/div/span[text()='"+ employeestatus.trim() +"']")).click();
			System.out.println("employeestatus selected");

		}
		else
		{
			
		}

	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
		

	}

	
	
	@Given("^enters salary wages \"(.*?)\"$")
	public void enters_salary_wages(String salary) throws Throwable {
		if(!salary.equals("null")) {
		WebElement Salaryinput = driver.findElement(By.xpath(SalaryWages));
		   if(Salaryinput.isDisplayed())
		   {  
			   Salaryinput.sendKeys(salary);
			   ConfigUtility.status = true;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Value entered in Salary or Wages ::" + salary,	"");
		   }
		   else
		   {
			   ConfigUtility.status = false;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Salary or wages per year (before tax) text box not displayed", "");
		   }
		}
	}
	
	
	@Given("^select member contribution \"(.*?)\"$")
	public void select_member_contribution(String selectmembercontribution) throws Throwable {
		
		try {

			Thread.sleep(1000);
			if(!selectmembercontribution.equals("null")) {
		   if(driver.findElement(By.xpath(kiwisaverMemberContribution)).isDisplayed())
		   {  
			   driver.findElement(By.xpath(kiwisaverMemberContribution)).click();
			   ConfigUtility.status = true;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "kiwi saver member contribution is ::" + selectmembercontribution,	"");
		   }
		   else
		   {
			   ConfigUtility.status = false;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "kiwi saver member contribution radio button is not displayed", "");
		   }
			}
		} catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
	
	
	
	@Given("^select PIR \"(.*?)\"$")
	public void select_PIR(String PIR) throws Throwable {
		
		driver.findElement(By.xpath("(//*[@class='well-value ng-binding'])[position()=2]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//div[@ng-model='ctrl.data.PIRRate']/descendant::ul/descendant::span[contains(text(),'"+ PIR.trim() + "')]")).click();
    

	}

	@Given("^enters current kiwisaver balance \"(.*?)\"$")
	public void enters_current_kiwisaver_balance(String kiwisaverbal) throws Throwable {
		WebElement kiwisaverbalance = driver.findElement(By.xpath(CurrentKiwiSaverBalance));
		if(!kiwisaverbal.equals("null")) 
		{   
		if(kiwisaverbalance.isDisplayed())
		   {  
			   kiwisaverbalance.sendKeys(kiwisaverbal);
			   ConfigUtility.status = true;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Value entered in Current KiwiSaver Balance ::" + kiwisaverbal,	"");
		   }
		   else
		   {
			   ConfigUtility.status = false;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Current KiwiSaver Balance text box not displayed", "");
		   }
		}
	}
	
	@Given("^enters voluntary contributions \"(.*?)\" and \"(.*?)\"$")
	public void enters_voluntary_contributions_and(String voluntarycontributions, String frequency) throws Throwable {
		driver.findElement(By.xpath("//*[@class='hot-label ng-binding ng-scope']")).click();
		Thread.sleep(1000);
	   WebElement volcountribution = driver.findElement(By.xpath(VoluntaryContributionsText));
	   if(!voluntarycontributions.equals("null")) 
		{
	   if(volcountribution.isDisplayed())
	   {  
		   volcountribution.sendKeys(voluntarycontributions);
		   ConfigUtility.status = true;
		   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Value entered in voluntary contributions ::" + voluntarycontributions,	"");
	   }
	   else
	   {
		   ConfigUtility.status = false;
		   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Voluntary Contributions  text box not displayed", "");
	   }
		}

		Thread.sleep(1000);

		 System.out.println("frequency :: "+ frequency.trim());
	   if(!frequency.trim().equals("null")) 
	   {
	   if(driver.findElement(By.xpath(VoluntaryContributionsFrequency)).isDisplayed())
	   {
	    driver.findElement(By.xpath(VoluntaryContributionsFrequency)).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//div[@model='ctrl.data.VoluntaryContributions']/descendant::ul/li/descendant::span[contains(text(),'"+frequency+"')]")).click();
	   }
	   else
	   {
		   ConfigUtility.status = false;
		   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Frequency drop down not displayed", "");
	   }
	   }
	   }
	
	
	@Given("^selects risk profile \"(.*?)\"$")
	public void selects_risk_profile(String riskprofile) throws Throwable {
		try {			
			   if(driver.findElement(By.xpath(RiskProfile)).isDisplayed())
			   {  
				   driver.findElement(By.xpath("//div[@ng-model='ctrl.data.RiskProfile']/descendant::span[contains(text(), '" + riskprofile + "')]/ancestor::span/preceding-sibling::span/input")).click();
				   ConfigUtility.status = true;
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Risk Profile selected value is ::" + riskprofile,	"");
			   }
			   else
			   {
				   ConfigUtility.status = false;
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Risk Profile radio button not displayed", "");
			   }
			} catch(Exception e)
			{
				e.printStackTrace();
			}
	}
	
	@Given("^enters saving goal \"(.*?)\"$")
	public void enters_saving_goal(String savingsgoal) throws Throwable {
		try {
			if(!savingsgoal.equals("null")) {

		WebElement savinggoal = driver.findElement(By.xpath(SavingsGoal));
		   if(savinggoal.isDisplayed())
		   {  
			   savinggoal.sendKeys(savingsgoal);
			   ConfigUtility.status = true;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Value entered in Savings Goal at Retirement ::" + savingsgoal,	"");
		   }
		   else
		   {
			   ConfigUtility.status = false;
			   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Savings goal at retirement text box not displayed", "");
		   }
		
			}} catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	

	@Given("^clicks on View your Kiwisaver retirement projections button$")
	public void clicks_on_View_your_Kiwisaver_retirement_projections_button() throws Throwable {
		try {

			Thread.sleep(1000);
			 driver.findElement(By.xpath("//*[@class='hot-label ng-binding ng-scope']")).click();
			WebElement calculateprojections = driver.findElement(By.xpath(CalculateRetirementProjectionsButton));
			   if(calculateprojections.isEnabled())
			   {  
				   calculateprojections.click();
				   ConfigUtility.status = true;
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Calculate Retirement Projection button clicked",	"");
			   }
			   else
			   {
				   ConfigUtility.status = false;
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "Savings goal at retirement text box not displayed", "");
			   }
			} catch(Exception e)
			{
				e.printStackTrace();
			}
	}

	@Then("^Kiwisaver retirement projections display$")
	public void kiwisaver_retirement_projections_display() throws Throwable {
		try {
			WebElement retirementprojections = driver.findElement(By.xpath(RetirementBalanceEstimation));
			   if(retirementprojections.isDisplayed())
			   {  
				   String projections = retirementprojections.getText();
				   ConfigUtility.status = true;
				   driver.findElement(By.xpath(ObjectRepository.email)).click();
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "KiwiSaver Retirement Projection value is :: " + projections,	"");
			   }
			   else
			   {
				   ConfigUtility.status = false;
				   ConfigUtility.fnGenerateReport(ConfigUtility.status, "KiwiSaver Retirement Projection not displayed", "");
			   }
			} catch(Exception e)
			{
				e.printStackTrace();
			} 
	}
}
	