@kiwisaver
Feature: Validating kiwi saver retirement calculator 

	Background: Navigating to kiwisaver retirement calculator page
  
    Given User invoke application
    And User navigate kiwisaver retirement calculators page
    Then User validate infomation icons of all fields available on the page
    
    @Execute1
  Scenario: Validating information icons
  
    Given user clicks on Current age information icon
    Then "This calculator has an age limit of 84 years old." information message is displayed
  	And User close browser
  	
  	@Execute
  	Scenario Outline: Calculate KiwiSaver returement projected balance
  	
  	Given User enters Current age "<current age>"
  	And selects employment status  "<employment status>"
  	And enters salary wages "<salary>"
  	And select member contribution "<member contribution>"
  	And select PIR "<PIR>"
  	And enters current kiwisaver balance "<current kiwisaver balance>"
  	And enters voluntary contributions "<Voluntary contributions>" and "<Frequency>"
  	And selects risk profile "<risk profile>"
  	And enters saving goal "<savings goal>"
  	And clicks on View your Kiwisaver retirement projections button
  	Then Kiwisaver retirement projections display
  	And User close browser
  	
  	Examples:
  	| current age | employment status	| salary	| member contribution | PIR		| current kiwisaver balance | Voluntary contributions | Frequency | risk profile| savings goal |
  	| 30					|	Employed					| 82000		|4%										| 17.5%	|null|null|null|	High				|null|
    |	45					| Self-employed			|		null	|			null								|10.5%	|	$100000										|		$90										|Fortnightly| Medium			|$290000			|
    | 55					| Not employed			|		null			|		null									|10.5%	| $140000										|		$10										|Annually		|	Medium			|$200000			|