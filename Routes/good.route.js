const express = require('express');
const router = express.Router();

const { createNewGoods , updateGoods , insertGoodClient , allGoods , updateStatusGoods } = require('../Controller/goods.controller');

router.get('/all' , allGoods)
      .post('/createadmin' , createNewGoods)
      .put('/updateadmin' , updateGoods)
      .put('/updatestatus' , updateStatusGoods)
      .post('/insertgoodclient', insertGoodClient);

module.exports = router;