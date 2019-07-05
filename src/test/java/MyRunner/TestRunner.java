package MyRunner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import stepDefinition.KiwiSaverCalculatorStepDefinition;
import utility.ConfigUtility;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			dryRun = false,
			features = "src\\test\\resources\\Features",
			glue = {"stepDefinition"},
			//, format= {"pretty", "html:test-output"}
			tags={"@Execute","@kiwisaver"},
			format={"pretty:target/cucumber-pretty.txt",
					"junit:target/cucumber.xml",
					"html:target/cucumber-html-report",
					"json:target/cucumber.json",
					"rerun:target/rerun.txt"},
			
			plugin = {"com.cucumber.listener.ExtentCucumberFormatter:"},
			monochrome=true	
			)


public class TestRunner extends KiwiSaverCalculatorStepDefinition {
		@BeforeClass
		public static void fnBeforeClassMethod() throws IOException, InterruptedException
		{
			ConfigUtility.fnReadConfigProperties();
			ConfigUtility.fnGenerateReportTemplate();
			ExtentProperties extentProperties = ExtentProperties.INSTANCE;
			extentProperties.setReportPath("D:\\EclipseWorkSpace\\westpac"+"\\DashboardReport.html");
		}
		@AfterClass
		public static void fnAfterClassMethod() throws IOException
		{
//			KiwiSaverCalculatorStepDefinition.driver.quit();
			ConfigUtility.fnFinishReportTemplate();
			Reporter.loadXMLConfig("D://EclipseWorkSpace//westpac//extent-config.xml");	
			ConfigUtility.extentlogger.log(LogStatus.PASS, "****** Test Case End Here *******");
		}

}
