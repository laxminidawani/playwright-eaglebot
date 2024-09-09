Feature: Eaglebot API validation -Negative Scenarios

@regression @negative_validation 
Scenario: Validate eaglebot API

Given the eaglebot is provided with invalid id
Then the eaglebot should not return any details

Given the eaglebot is provided with invalid url
Then the response shouldn't be returned