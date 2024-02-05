const db = require('../utils/database');

class goodsModule{

    async insertGoodClient(code){
        const { code , id } = code;
        const query = "inset good from goodsclient (code) values (?) where id = ?"; 
        let res = await db.connection.execute(query ,[ code, id ]);
        if (res) {
            console.log("success");
            return res;
        }else {console.log("Invalid code")}
    }

    async createNewGoods(items){
        const { name , code , pictureURL , category , price } = items;
        const query = "insert into createnewgoods (name , code , pictureURL , category , price) values (? , ? , ? , ? , ?)"; 
        let res = await db.connection.execute(query ,[ name , code , pictureURL , category , price ])
        return res;
    }

    async updateGoods(items){
        const { name , code } = items;
        const query = "update createnewgoods set name = ? where code = ?";
        let res = await db.connection.execute(query ,[ name ,code ]);
        if (res){
            console.log("success");
            return res;
        }else {console.log("Invalid code")}
    }

    async allGoods(){
        const query = "select * from createnewgoods";
        let res = await db.connection.execute(query);
        return res;
    }

    async updateStatusGoods(status){
        const { status , id } = status;
        const query = "update goodsclient set status = ? where id = ? ";
        let res = await db.connection.execute(query , [status , id]);
        return res;
    }

}

module.exports = new goodsModule();