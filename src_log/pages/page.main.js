const { Button, Input } = require('../elements');

	class MainPage{
		constructor (){
			this.menuProfil = new Button ('a.link_link__3zEN3=Clinics');
	};
	
  	async methodMainPage() {
      	await this.menuProfil.click();
  };
};

module.exports = { MainPage };