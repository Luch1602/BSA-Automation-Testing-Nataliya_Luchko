const { Button, Input } = require('../elements');

class singInPage{
	constructor (){
		this.passwordField = new Input('input[name="password"]');
    	this.retryPasswordField = new Input('input[name="retypePassword"]');

		this.submitButton = new Button('button');
	};

async methodSingIn({email, password}) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    
    await this.submitButton.click();
};
};

module.exports = { singInPage };
