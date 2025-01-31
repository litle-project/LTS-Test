// validator
// const LocationValidator = require('../validators/general/location/location-list-validator');
// const LocationDetailValidator = require('../validators/general/location/location-detail-validator');

// responses
const populations = require('../../../public/files/citizen.json');
// const LocationDetailResponse = require('../responses/general/location/location-detail-response');

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
