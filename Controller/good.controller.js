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
    let items = await goodsModule.updateStatus(req.body);
    res.json(items);
};

exports.insertGoodClient = async (req , res) =>{
    let items = await goodsModule.insertGoodClient(req.body);
    res.json(items);
};