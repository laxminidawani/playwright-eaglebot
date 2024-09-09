# playwright-eaglebot


Project structure:
The framework consists of features folder with feature files and respective step definition. 
Feature files:
1.	eaglebot-negative.feature : It consists of negative API validations.
There are 2 scenarios
Scenario -1: Validate eaglebot API response code 404-NOT FOUND when an invalid ID is provided. 
Scenario -2: Validate eaglebot API response code 500-SERVER ERROR when an invalid URL is provided. 

2.	 eaglebot-positive.feature : It consists of positive API validations. 
There are 2 scenarios
Scenario -1: Validate eaglebot API response code 200 along with objects returned when query parameter is not provided.
 Scenario -2: Validate eaglebot API response code 200 along with objects returned when query parameter is provided.
3.	The generated html report can be referred as cucumber-report.html 



Execution guidelines:
The attached project folder can be opened using IDE of your choice. 

1.	All the tests can be executed in terminal using command : npx cucumber-js --tags "@regression" --format html:cucumber-report.html

2.	The negative scenarios can be tested using command : npx cucumber-js --tags "@negative_validation" --format html:cucumber-report.html

3.	The positive scenarios can be tested using command : npx cucumber-js --tags "@positive_validation" --format html:cucumber-report.html


