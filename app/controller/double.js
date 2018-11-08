const Controller = require('egg').Controller;
const axios =  require('axios');

class DoubleController extends Controller {
  async index() {
    const { data } = await axios.get('https://activity.szlcsc.com/pc/festival');
    this.ctx.body = JSON.stringify(data);
  }
}

module.exports = DoubleController;
