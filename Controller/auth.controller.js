const authModule = require('../models/auth');


exports.loginTask = async (req , res ) =>{
   let items = await authModule.login(req.body);
   res.json(items);
};

exports.registerTask = async (req , res)=>{
   let tasks = await authModule.register(req.body);
   res.json(tasks);
};
