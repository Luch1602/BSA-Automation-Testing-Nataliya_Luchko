const { expect } = require('chai');
// *перехід по url
// *заповненя форми входу як пацієнт
// *натиснути на кнопку вхід 
// *клікнути на пункт меню"My Profile"
// *клікнути на зображення олівця
// *внести зміни в поля форми
// *клікнути кнопку "Edit"
// перевірка результату

const rundomNumber = () => Date.now();

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
	await browser.pause(2000);
	
	await signIpButton.waitForDisplayed({ timeout: 5000 });
    await signIpButton.click();
	await browser.pause(2000);
	
	const menuProfil = await $('a.link_link__3zEN3=My Profile');
	await menuProfil.waitForDisplayed({ timeout: 5000 });
    await menuProfil.click();
	await browser.pause(2000);
	
	const penButton = await $('button.styles_edit__ftuHl');
	await penButton.waitForDisplayed({ timeout: 5000 });
    await penButton.click();
  	await browser.pause(2000);

	const usernameField = await $('input[name="name"]');
	const surnameField = await $('input[name="surname"]');
	const suff= rundomNumber();
	await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Nata-'+suff);
	await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Test-'+suff);
	await browser.pause(3000);
	
	const editButton = await $('button[type="submit"]');
	await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();
	await browser.pause(3000);
	
/*	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
	
	const newtext = 'Nata-'+suff+ " "+'Test-'+suff;
	const newname=await $$('span.styles_name__2vTNE='+newtext);
	console.log("newname",newname.length);
	await browser.pause(10000);
	expect(1).to.be.eql(newname.length); */

	await browser.reloadSession();
  });
  
});

