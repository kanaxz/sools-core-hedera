const Service = require('sools-hedera/Service')
const Array = require('sools-core/types/Array')

module.exports = class MenuService extends Service {
  constructor() {
    super()
    this.links = new Array()
  }
}
  .define()