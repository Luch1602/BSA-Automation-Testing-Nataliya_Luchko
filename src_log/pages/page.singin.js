const { Button, Input } = require('../elements');

class SingInPage{
	constructor (){
		this.emailField = new Input('input[name="email"]');
    	this.passwordField = new Input('input[name="password"]');

		this.submitButton = new Button('button');
	};

async methodSingIn({email, password}) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    
    await this.submitButton.click();
};
};

module.exports = { SingInPage };
