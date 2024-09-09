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




Execution guidelines:

Prerequisite
Node.js(latest version)
npm (latest version)

Step 1: Cloning the project
        clone the repository in VS Code and open the cloned folder. 
        git clone <repository>
        
Step 2: Installing the dependencies 
        npm install
        Upon successful installation, a new node_module folder will appear in the project directory. 
        
Step 3: Running the test cases

       1.	All the tests can be executed in terminal using command : npx cucumber-js --tags "@regression" --format html:cucumber-report.html

       2.	The negative scenarios can be tested using command : npx cucumber-js --tags "@negative_validation" --format html:cucumber-report.html

       3.	The positive scenarios can be tested using command : npx cucumber-js --tags "@positive_validation" --format html:cucumber-report.html
       
Step 4: Test reports and evidences.
        The generated html report can be referred as cucumber-report.html within project 


