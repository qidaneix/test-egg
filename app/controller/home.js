const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = `here is ${this.app.config.env}`;
  }
}

module.exports = HomeController;
