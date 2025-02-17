const { expect } = require('chai');
// *перехід по url
// *заповненя форми як адміністратор
// *натиснути на кнопку вхід 
// *клікнути на пункт меню "Clinics"
// *клікнути на кнопку "Add"
// *заповнити поля форми
// клікнути кнопку "Add"
// перевірка результату

const rundomNumber = () => Date.now();

describe('Add the new clinic:', function () {

  it('should be able to add the new clinic', async function () {
    await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');

	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signInButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('john_admin2@admin.com');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('Pa55word');
	
	await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();
	
	await browser.pause(2000);
	
	const menuProfil = await $('a.link_link__3zEN3=Clinics');
	await menuProfil.waitForDisplayed({ timeout: 5000 });
    await menuProfil.click();

	await browser.pause(2000);
	
	const addButton = await $('button.styles_primary-dark__1WnyR');
	await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click();

	await browser.pause(2000);
	
	const clinNameField = await $('input[name="name"]');
	const clinAddressField = await $('input[name="address"]');
	const suff= rundomNumber();
	await clinNameField.waitForDisplayed({ timeout: 5000 });
    await clinNameField.setValue('Clinic-'+suff);
	
	await clinAddressField.waitForDisplayed({ timeout: 5000 });
    await clinAddressField.setValue('Street-'+suff);
	
	const arrSel = await $$('div.selectStyles__value-container');
	const statusField = arrSel[0];
	const sityField = arrSel[1];
	
	const statusOption = await $('div.selectStyles__value-container=private');
    const sityOption = await $('div.selectStyles__value-container=boston, MA');
	
	await statusField.waitForDisplayed({ timeout: 5000 });
    await statusField.click();

    await statusOption.waitForDisplayed({ timeout: 5000 });
    await statusOption.click();

    await sityField.waitForDisplayed({ timeout: 5000 });
    await sityField.click();

    await sityOption.waitForDisplayed({ timeout: 5000 });
    await sityOption.click();
	
	const addButton1 = await $('button[type="submit"]');
	await addButton1.waitForDisplayed({ timeout: 5000 });
    await addButton1.click();
	
	await browser.pause(5000);
	
	
/*	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors'); */

	await browser.reloadSession();
  });
  
});

