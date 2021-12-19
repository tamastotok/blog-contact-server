const router = require('express').Router();
const submit_form = require('../controllers/submitFormController');

router.post('/', submit_form);

module.exports = router;
