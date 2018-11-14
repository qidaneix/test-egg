const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = `here is ${this.app.config.env} ${this.ctx.query.q} ${this.ctx.params.id}`;
  }
}

module.exports = HomeController;
