const express = require('express');
const router = express.Router();

const { loginTask , registerTask , checkadmin } = require('../Controller/auth.controller');

router.post('/login' , loginTask)
      .post('/register' , registerTask)
      .post('/admin',checkadmin);

module.exports = router;