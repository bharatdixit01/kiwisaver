package objectrepo;

public interface ObjectRepository {
public static String kiwisavericon = "//a[@id='ubermenu-section-link-kiwisaver-ps']";
public static String kiwisavercalculatorbutton = "//a[text()='KiwiSaver calculators']";
public static String clickheretogetstartedbutton = "//a[text()='Click here to get started.']";
public static String KiwiSaverRetirementCalculatorheader = "//*[@class='content-inner-header']//h1[text()='KiwiSaver Retirement Calculator']";
public static String kiwisavercalculatorframe = "(//iframe[@src])[position()=1]";
public static String kiwisavercalculatoricons = "//*[@class='field-group-set-frame']//div[contains(@class,'wpnib')][@frameless='true']//*[@class='field-info ng-scope']";
//public static String kiwisavercalculatoricons = "//div[@class='field-group-set-frame']/*[@frameless='true']";
public static String kiwisavercalculatorfieldname = "//*[@class='field-group-set-frame']//div[contains(@class,'wpnib')][@frameless='true']";
public static String currentageinformationmessage = "//*[@class='field-message message-info ng-binding']/p";
public static String CurrentAgeInput = "//div[@help-id='CurrentAge']//input";
public static String EmploymentStatusList = "//div[@ng-model='ctrl.data.EmploymentStatus']/descendant::i[@class='ir dropdown-arrow']";


public static String EmploymentStatusEmployed = "//div[@help-id='EmploymentStatus']//ul/li/div/span[text()='Employed']";
public static String EmploymentStatusSelfEmployed = "//div[@help-id='EmploymentStatus']//ul/li/div/span[text()='Self-employed']";
public static String EmploymentStatusUnEmployed = "//div[@help-id='EmploymentStatus']//ul/li/div/span[text()='Not employed']";
public static String SalaryWages = "//div[@model='ctrl.data.AnnualIncome']/descendant::input";
public static String kiwisaverMemberContribution = "//input[@type='radio'][@id='radio-option-06E']";
public static String PIRFieldHeader = "//label[contains(text(), 'Prescribed investor rate (PIR)')]";
public static String PIRlist = "//div[@ng-model='ctrl.data.PIRRate']/descendant::i[@class='ir dropdown-arrow']";
public static String CurrentKiwiSaverBalance = "//div[@help-id='KiwiSaverBalance']//input";
public static String VoluntaryContributionsText = "//div[@help-id='VoluntaryContributions']//input";
public static String VoluntaryContributionsFrequency = "//*[@class='ng-binding ng-scope'][contains(text(),'Frequency')]";
public static String RiskProfile = "//div[@help-id='RiskProfile']/button";
public static String SavingsGoal = "//div[@help-id='SavingsGoal']//input";
public static String CalculateRetirementProjectionsButton = "//span[text()='View your KiwiSaver retirement projections']";
public static String RetirementBalanceEstimation = "//span[@class='result-value result-currency ng-binding']";
public static String graph = "//*[@class='right-hand-side-data-label kiwisaver-data-label kiwisaver-data-label-highlighted']";
public static String email = "//*[text()='Email']";

}