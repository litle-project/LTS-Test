const populations = require('../../../public/files/citizen.json');

module.exports = {
  index: async (request, response, next) => {
    try {
      response.send({
        code: 200,
        message: 'OK',
        data: populations,
      });
    } catch (error) {
      next(error);
    }
  },
};
