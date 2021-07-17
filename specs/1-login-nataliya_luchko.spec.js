const { expect } = require('chai');
// *перехід по url
// *заповненя форми
// *натиснути на кнопку вхід
// *перевірка результату

// const rundomNumber = () => Date.now();

describe('Log in:', function () {

  it('should be able to login with valid data', async function () {
    await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');

	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signIpButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lviv@i.ua');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12345678');
	
	await signIpButton.waitForDisplayed({ timeout: 5000 });
    await signIpButton.click();
	
	await browser.pause(5000);
	
	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

	await browser.reloadSession();
  });
});
