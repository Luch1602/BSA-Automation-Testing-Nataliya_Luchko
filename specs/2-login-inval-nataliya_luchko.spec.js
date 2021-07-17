const { expect } = require('chai');
// *перехід по url
// *заповненя полів невалідними даними
// *клікнути кнопку "Sing In"
// перевірка результату

describe('Log in with invalid date:', function () {

    it('should not be able to login with invalid email', async function () {
    await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');

	const emailField = await $('input[name="email"]');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lvivi.ua');
	
	await browser.pause(3000);
	
/*	await browser.waitUntil(
      async function () {
        const errMesEmail = await $('span="Email is incorrect"');
    expect(errMesEmail).to.be.eql('Email is incorrect');
      },
      { timeout: 5000 },
    );
	
	const errMesEmail = await $('span="Email is incorrect"');
    expect(errMesEmail).to.be.eql('Email is incorrect'); */

	await browser.reloadSession();	
  });

	it('should not be able to login with invalid password', async function () {
    await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');

	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signInButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lviv@i.ua');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12a34a56a');
	
	await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
	
	await browser.pause(3000);
	
/*	await browser.waitUntil(
      async function () {
        const errMesPass = await $('span="Password is incorrect"');
    expect(errMesPass).to.be.eql('Password is incorrect');
      },
      { timeout: 5000 },
    );
	
	const errMesPass = await $('span="Password is incorrect"');
    expect(errMesPass).to.be.eql('Password is incorrect'); */

	await browser.reloadSession();	
  });

});
