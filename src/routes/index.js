const app = require('express');
require('express-group-routes');

const router = app.Router();
const PopulationController = require('../app/controllers/population-controller');

router.group('/population-statistic', (route) => {
  route.get('/', PopulationController.index);
});

// method not allowed when method request http is failure
router.all('/*', (req, res) => {
  res.status(405)
    .json({
      status: '405',
      message: `${req.method} not allowed on this route`,
      data: {},
    });
});

module.exports = router;
