const { expect } = require('chai');
// *перехід по url
// *заповненя форми входу як лікар
// *натиснути на кнопку вхід 
// *клікнути на пункт меню "My Profile"
// внести зміни в поля спеціальність та назва клініки
// клікнути кнопку "Save"
// клікнути на пункт меню "Doctors"
// перевірка результату

//const rundomNumber = () => Date.now();

describe('change of doctor`s profile data:', function () {

  it('should be able to change the specialty and clinic', async function () {
    await browser.setWindowSize(1440, 960);
	await browser.url('/sign-in');

	const emailField = await $('input[name="email"]');
	const passwordField = await $('input[name="password"]');
	
	const signIpButton = await $('button');
	
	await emailField.waitForDisplayed({ timeout: 5000 });
	await emailField.setValue('luchka2205@gmail.com');
	
	await passwordField.waitForDisplayed({ timeout: 5000 });
	await passwordField.setValue('12345678');
	
	await signIpButton.waitForDisplayed({ timeout: 5000 });
    await signIpButton.click();
		
	const main1Menu = await $$('a.link_link__3zEN3');
	const menuDoctor = main1Menu[1];
	//const menuProfil = mainMenu[3];
	const menu2Menu = await $$('a.link_active__2yhrp')
	const menuProfil = menu2Menu[1];
	await menuProfil.waitForDisplayed({ timeout: 5000 });
    await menuProfil.click();
		
	const ddls = await $$('div.selectStyles__input');

    const specialDdl = ddls[0];
    const clinicDdl = ddls[1];

    const specialOption = await $('div.selectStyles__input=Dermatologist');
    const clinicOpnion = await $('div.selectStyles__input=Hospital');

	await specialDdl.waitForDisplayed({ timeout: 5000 });
    await specialDdl.click();

    await specialOption.waitForDisplayed({ timeout: 5000 });
    await specialOption.click();

	await clinicDdl.waitForDisplayed({ timeout: 5000 });
    await clinicDdl.click();

    await clinicOpnion.waitForDisplayed({ timeout: 5000 });
    await clinicOpnion.click();

    const saveBut = await $$('button[type="submit"]');
	const saveBut1 = saveBut[0];
	const saveBut2 = saveBut[1];
	
	await saveBut1.waitForDisplayed({ timeout: 5000 });
    await saveBut1.click();
	await saveBut2.waitForDisplayed({ timeout: 5000 });
    await saveBut2.click();

	await menuDoctor.waitForDisplayed({ timeout: 5000 });
    await menuDoctor.click();

	await browser.pause(5000);
//------------------------	
	const nameDoctor=await $('span.styles_name__2vTNE');
	console.log(nameDoctor);
//	expect(newname).to.be.eql('!!!!Test2');
	
/*	await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );
	
	const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors'); */

//	await browser.reloadSession();
  });

  
});
