const populations = require('../../../../public/files/citizen.json');
const snakeCaseConverter = require('../../../../helpers/snakecase-converter');

module.exports = class {
  constructor({ request }) {
    this.request = request;
    this.populations = populations;
    this.converter = snakeCaseConverter;
    return this.process();
  }

  async process() {
    return new Promise((resolve, reject) => {
      try {
        resolve({ data: this.populations });
      } catch (error) {
        reject(error);
      }
    });
  }
};
