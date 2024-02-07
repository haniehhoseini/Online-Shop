const goodsModule = require('../models/goods');

exports.createNewGoods = async ( req , res) =>{
    let items = await goodsModule.createNewGoods(req.body);
    res.json(items);
};

exports.updateGoods = async (req , res) =>{
    let items = await goodsModule.updateGoods(req.body);
    res.json(items);
};

exports.allGoods = async (req , res) =>{
    let items = await goodsModule.allGoods(req.body);
    res.json(items);
};

exports.updateStatusGoods = async (req , res) =>{
    let items = await goodsModule.updateStatusGoods(req.body);
    res.json(items);
};

exports.insertGoodClient = async (req , res) =>{
    let items = await goodsModule.insertGoodClient(req.body);
    res.json(items);
};

exports.allPaymentBuy = async (req, res) =>{
    let items = await goodsModule.allPaymentBuy(req.body);
    res.json(items);
};

exports.readAllGoodOfAllClient = async (req , res) =>{
    let items = await goodsModule.readAllGoodOfAllClient(req.body);
    res.json(items);
};