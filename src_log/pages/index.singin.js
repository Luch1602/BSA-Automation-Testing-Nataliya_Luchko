const { singInPage } = require('./page.singin');

class App {
  constructor() {
    this.singInPage = new singInPage();
  }
}

module.exports = { App };
