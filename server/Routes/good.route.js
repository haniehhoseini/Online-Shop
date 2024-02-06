const express = require('express');
const router = express.Router();

const { createNewGoods , allPaymentBuy , updateGoods , insertGoodClient , allGoods , updateStatusGoods } = require('../Controller/good.controller');

router.get('/all' , allGoods)
      .post('/createadmin' , createNewGoods)
      .post('/updateadmin' , updateGoods)
      .post('/updatestatus' , updateStatusGoods)
      .post('/insertgoodclient', insertGoodClient)
      .post('/cart', allPaymentBuy);

module.exports = router;