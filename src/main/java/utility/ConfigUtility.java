package utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import junit.framework.Assert;
import stepDefinition.KiwiSaverCalculatorStepDefinition;

public class ConfigUtility {
	
	public static FileInputStream fileinputstream;
	public static Properties properties;
	public static String configfilepath = "D:\\EclipseWorkSpace\\westpac\\src\\test\\resources\\config.properties";
	public static String application_url;
	public static String browser = "";
	public static int implicitwaittime ;
	public static int pageloadtimeout ;
	public static ExtentReports extentreport;
	public static ExtentTest extentlogger;
	public static boolean status;
	
	public static void fnReadConfigProperties()
	{
	try
	{
		ConfigUtility.fileinputstream = new FileInputStream(ConfigUtility.configfilepath);
		ConfigUtility.properties = new Properties();
		ConfigUtility.properties.load(ConfigUtility.fileinputstream);
		ConfigUtility.application_url = ConfigUtility.properties.getProperty("baseurl");
		ConfigUtility.browser = ConfigUtility.properties.getProperty("browser");
		ConfigUtility.implicitwaittime = (Integer.parseInt(ConfigUtility.properties.getProperty("implicitwaittime")));
		ConfigUtility.pageloadtimeout = (Integer.parseInt(ConfigUtility.properties.getProperty("pageloadtimeout")));
	
	}
	catch(IOException ioe)
	{
	ioe.printStackTrace();
	}
	}
	
	public static void fnGenerateReportTemplate() throws InterruptedException
	{
	extentreport = new ExtentReports("D:\\EclipseWorkSpace\\westpac\\"+"\\TestReport.html", true);
	extentreport.loadConfig(new File(System.getProperty("user.dir")+"\\extent-config.xml"));
	extentlogger = extentreport.startTest("Test Case Name :: Westpac KiwiSaver Retirement Calculator Validation", "<br> Test Case Executed on "+ConfigUtility.browser +" browser" + "</br>");
	ConfigUtility.extentlogger.log(LogStatus.PASS, "****** Test Case Execution Starts Here *******");
	}

	public static void fnGenerateReport(boolean status, String logmessage, String screenshotname) throws InterruptedException
	{
		if(status)
		{
			ConfigUtility.extentlogger.log(LogStatus.PASS, logmessage+ConfigUtility.extentlogger.addScreenCapture(ConfigUtility.fnCaptureEncodedImage()));
			org.junit.Assert.assertEquals(logmessage, true, true);
		}
		else
		{
			ConfigUtility.extentlogger.log(LogStatus.FAIL, logmessage);
			org.junit.Assert.assertEquals(logmessage, true, false);
		}
	}
	
	public static void fnFinishReportTemplate()
	{
		ConfigUtility.extentreport.endTest(ConfigUtility.extentlogger);
		ConfigUtility.extentreport.flush();
		ConfigUtility.extentreport.close();
	}

	public static String fnCaptureEncodedImage()
	{
	TakesScreenshot newscrnshot = (TakesScreenshot)KiwiSaverCalculatorStepDefinition.driver;
	String scrnshot = newscrnshot.getScreenshotAs(OutputType.BASE64);
	return "data:image/jpg;base64, "+scrnshot;
	}
	
}
