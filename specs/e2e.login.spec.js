const { expect } = require('chai');
const { App } = require('../src_log/pages');

const app = new App();

describe('Log in:', function () {
  beforeEach(async function (){
	await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');
});

  afterEach(async function (){
	await browser.reloadSession();
  });	
	
    it('should be able to login with valid data', async function () {
	await app.singInPage.methodSingIn({
      email: 'gv_lviv@i.ua',
      password: '12345678',
    });

/*	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signIpButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lviv@i.ua');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12345678');
	
	await signIpButton.waitForDisplayed({ timeout: 5000 });
    await signIpButton.click();  */
	
	await browser.pause(3000);  
	
	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

  });

  it('should not be able to login with invalid email', async function () {
    await app.singInPage.methodSingIn({
      email: 'gv_lvivi.ua',
      password: '12345678',
    });
/*	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signIpButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lvivi.ua');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12345678');
	
	await signIpButton.waitForDisplayed({ timeout: 5000 });
    await signIpButton.click();  */
	
	await browser.pause(3000);
	
	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');

  });

  it('should not be able to login with invalid password', async function () {
	await app.singInPage.methodSingIn({
      email: 'gv_lviv@i.ua',
      password: '12a34a56a',
    });
/*	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signInButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('gv_lviv@i.ua');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12a34a56a');
	
	await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click(); */
	
	await browser.pause(3000);
	
	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');

  });

});
