const express = require('express');
const router = express.Router();
const webhookController = require('../controller/webhookController');

router.post('/receive', webhookController.handleWebhook);

module.exports = router;