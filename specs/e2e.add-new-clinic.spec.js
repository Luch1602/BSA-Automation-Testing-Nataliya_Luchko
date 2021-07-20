const { expect } = require('chai');
// *перехід по url
// *заповненя форми як адміністратор
// *натиснути на кнопку вхід 
// *клікнути на пункт меню "Clinics"
// *клікнути на кнопку "Add"
// *заповнити поля форми
// клікнути кнопку "Add"
// перевірка результату
const { App } = require('../src_log/pages');
const rundomNumber = () => Date.now();
const app = new App();

const rundomNumber = () => Date.now();

describe('add the new clinic', function () {
  beforeEach(async function (){
	await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');
  });

  afterEach(async function (){
	await browser.reloadSession();
  });	
	
  it('should be able to add the new clinic', async function () {
    
	await app.singInPage.methodSingIn({
      email: 'gv_lviv@i.ua',
      password: '12345678',
    });
/*	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signInButton = await $('button');  
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('john_admin2@admin.com');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('Pa55word');
	
	await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();  */
	
	await app.mainPage.methodMainPage();
/*	const menuProfil = await $('a.link_link__3zEN3=Clinics');
	await menuProfil.waitForDisplayed({ timeout: 5000 });
    await menuProfil.click(); */
	
	await app.clinicPage.methodClinic();
/*	const addButton = await $('button.styles_primary-dark__1WnyR');
	await addButton.waitForDisplayed({ timeout: 5000 });
    await addButton.click(); */

	const suff= rundomNumber();
	await app.addClinicPage.methodAddClinic({
      name: 'Clinic-'+suff,
      address: 'Street-'+suff,
      status: 'private',
      sity: 'Boston, MA',
    });
/*	const arrSel = await $$('div.selectStyles__control');
	const statusField = arrSel[0];
	const sityField = arrSel[1];
	
	const statusOption = await $('div.selectStyles__option=private');
    const sityOption = await $('div.selectStyles__option=Boston, MA');
	
	await statusField.waitForDisplayed({ timeout: 5000 });
    await statusField.click();

    await statusOption.waitForDisplayed({ timeout: 10000 });
    await statusOption.click();

    await sityField.waitForDisplayed({ timeout: 5000 });
    await sityField.click();

    await sityOption.waitForDisplayed({ timeout: 5000 });
    await sityOption.click();
	
	const addButton1 = await $('button.styles_btn___s1BB[type="submit"]');
	await addButton1.waitForDisplayed({ timeout: 5000 });
    await addButton1.click(); */
	
		
/*	await browser.waitUntil(
      async function () {
        const newClinic = $('span.styles_title__3xRcc=Delta');
	    expect(newClinic).toExist();
      },
      { timeout: 5000 },
    );
	
	const newClinic = $('span.styles_title__3xRcc=Delta');
    expect(newClinic).toExist();
*/
  });	

});

