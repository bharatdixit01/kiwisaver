package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

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
	   
	}

	@Given("^selects \"(.*?)\"$")
	public void selects(String employeestatus) throws Throwable {
	    
	}

	@Given("^enters \"(.*?)\"$")
	public void enters(String salary) throws Throwable {
	   
	}

	@Given("^select \"(.*?)\"$")
	public void select(String membercontribution) throws Throwable {
	    
	}
	
	@Given("^select PIR \"(.*?)\"$")
	public void select_PIR(String PIR) throws Throwable {
	    
	}

	@Given("^enters current kiwisaver balance \"(.*?)\"$")
	public void enters_current_kiwisaver_balance(String arg1) throws Throwable {
	    
	}
	
	@Given("^enters voluntary contributions \"(.*?)\" and \"(.*?)\"$")
	public void enters_voluntary_contributions_and(String arg1, String arg2) throws Throwable {
	    
	}
	
	
	@Given("^selects risk profile \"(.*?)\"$")
	public void selects_risk_profile(String riskprofile) throws Throwable {
	    
	}
	
	@Given("^enters saving goal \"(.*?)\"$")
	public void enters_saving_goal(String arg1) throws Throwable {
	   
	}
	
	

	@Given("^clicks on View your Kiwisaver retirement projections button$")
	public void clicks_on_View_your_Kiwisaver_retirement_projections_button() throws Throwable {
	    
	}

	@Then("^Kiwisaver retirement projections display$")
	public void kiwisaver_retirement_projections_display() throws Throwable {
	    
	}
}
