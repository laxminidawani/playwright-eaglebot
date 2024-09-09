Feature: Eaglebot API validation -Positive Scenarios

@regression @positive_validation
Scenario: Get details from Eaglebot

Given the eaglebot API is made a call without any id 
Then the eaglebot should return all the details

Given the eaglebot is provide with specific id 
Then the eaglebot should return the details

