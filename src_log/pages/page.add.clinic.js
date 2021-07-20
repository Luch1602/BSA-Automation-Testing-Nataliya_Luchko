const { Button, Input } = require('../elements');

class AddClinic {
  constructor() {
    this.clinNameField = new Input('input[name="name"]');
    this.clinAddressField = new Input('input[name="address"]');
       
    this.statusField = new Button('div.selectStyles__control', 0);
    this.sityField = new Button('div.selectStyles__control', 1);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

    this.addButton1 = new Button('button.styles_btn___s1BB[type="submit"]');
  }
		
  async methodAddClinic({ name, address, status, sity }) {
    await this.clinNameField.setValue(name);
    await this.clinAddressField.setValue(address);

    await this.statusField.click();
    await this.ddlOption.clickByText(status);

    await this.sityField.click();
    await this.ddlOption.clickByText(sity);

    await this.addButton1.click();
  }
}

module.exports = { AddClinic };
