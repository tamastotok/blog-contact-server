const router = require('express').Router();
const server_status = require('../controllers/serverStatusController');

router.get('/', server_status);

module.exports = router;
