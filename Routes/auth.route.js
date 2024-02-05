const express = require('express');
const router = express.Router();

const { loginTask , registerTask } = require('../Controller/auth.controller');

router.post('/login' , loginTask)
      .post('/register' , registerTask);

module.exports = router;