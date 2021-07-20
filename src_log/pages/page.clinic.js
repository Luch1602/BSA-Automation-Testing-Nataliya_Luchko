const { Button, Input } = require('../elements');

  class ClinicPage{
	constructor (){
		this.addButton = new Button('button.styles_primary-dark__1WnyR');
  };

  async methodClinic() {
    await this.addButton.click();
  };
};

module.exports = { ClinicPage };
