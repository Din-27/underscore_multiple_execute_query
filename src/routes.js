const express = require('express')
const { test } = require('./controller')
const router = express.Router()

router.post('/test', test)

module.exports = router