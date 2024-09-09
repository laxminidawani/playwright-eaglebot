const {  expect, request } = require('@playwright/test')
const { Given, Then } = require('@cucumber/cucumber')

Given('the eaglebot API is made a call without any id', async function () {
  const context = await request.newContext();
   this.response =await context.get('https://ek609.wiremockapi.cloud/v1/eaglebot');
  
});
Then('the eaglebot should return all the details', async function () {
    expect(this.response.status()).toBe(200);
 });
 Given('the eaglebot is provide with specific id', async function () {
  const context = await request.newContext();
   this.response =await context.get('https://ek609.wiremockapi.cloud/v1/eaglebot?eagle-id=12345');
  
});
Then('the eaglebot should return the details', async function () {
    expect(this.response.status()).toBe(200);
     const userData = await this.response.json();
    expect(userData.eaglebot[0].location).toBe("Ripley");
    expect(userData.eaglebot[0].timestamp).toContain("2024-09-09");
    expect(userData.eaglebot[0].postcode).toBe(4306);
    expect(userData.eaglebot[0].roadname).toBeTruthy();
    expect(userData.eaglebot[0].direction).toBeTruthy();
    expect(userData.eaglebot[0].speed).toBeTruthy();
    expect(userData.eaglebot[0].vehicleType).toBeTruthy();
    expect(userData.eaglebot[0].trafficRate).toBeTruthy();
    expect(userData.eaglebot[0].lat).toBeTruthy();
    expect(userData.eaglebot[1].location).toBe("Ripley");
    expect(userData.eaglebot[1].timestamp).toContain("2024-09-09");
    expect(userData.eaglebot[1].postcode).toBe(4306);
    expect(userData.eaglebot[1].roadname).toBeTruthy();
    expect(userData.eaglebot[1].direction).toBeTruthy();
    expect(userData.eaglebot[1].speed).toBeTruthy();
    expect(userData.eaglebot[1].vehicleType).toBeTruthy();
    expect(userData.eaglebot[1].trafficRate).toBeTruthy();
    expect(userData.eaglebot[1].lat).toBeTruthy();

});
Given('the eaglebot is provided with invalid id', async function () {
  const context = await request.newContext();
   this.response =await context.get('https://ek609.wiremockapi.cloud/v1/eaglebot?eagle-id=34560');
  
});
Then('the eaglebot should not return any details', async function () {
    expect(this.response.status()).toBe(404);
 });
 Given('the eaglebot is provided with invalid url', async function () {
  const context = await request.newContext();
   this.response =await context.get('https://ek609.wiremockapi.cloud/v1/eaglebot?eagleid=1');
  
});
Then('the response shouldn\'t be returned', async function () {
    expect(this.response.status()).toBe(500);
 });


