const { SingInPage } = require('./page.singin');
const { MainPage } = require('./page.main');
const { ClinicPage } = require('./page.clinic');
const { AddClinic } = require('./page.add.clinic');

class App {
  constructor() {
    this.singInPage = new SingInPage();
	this.mainPage = new MainPage();
	this.clinicPage = new ClinicPage();
	this.addClinicPage = new AddClinic();
  }
}

module.exports = { App };

