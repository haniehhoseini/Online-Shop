const db = require('../utlis/database');

class goodsModule{

    async insertGoodClient(data){
        const { id , code } = data;
        const find = "select name , category, price from createnewgoods where code = ?"
        let [tempres] = await db.connection.execute(find, [data.code]);
        let [tempres2] = tempres;

        const {name , price , category } = tempres2;
        const query = "insert into  goodsclient (code , name , id , price , category ) values (? , ? , ? , ? , ?)"; 
        let res = await db.connection.execute(query ,[ code , name , id , price , category ]);
        if (res) {
            console.log("success");
            return res;
        }else {console.log("Invalid")}
    }

    async createNewGoods(items){
        const { name , code , img , category , price , mojodi} = items;
        const query = "insert into createnewgoods (name , code , img , category , price , mojodi) values (? , ? , ? , ? , ? , ?)"; 
        let res = await db.connection.execute(query ,[ name , code , img , category , price , mojodi])
        return res;
    }

    async updateGoods(items) {
        try {
            const { name, img, category, price , code , mojodi} = items;
            console.log(items);
            const query = "UPDATE createnewgoods SET name = ?, img = ?, category = ?, price = ? , mojodi = ? WHERE code = ?";
            
            const res = await db.connection.execute(query, [name, img, category, price, mojodi ,code ]);
    
            if (res && res.affectedRows > 0) {
                console.log("Success: Rows affected -", res.affectedRows);
                return res;
            } else {
                console.log("Invalid code or no rows updated");
                return null;  
            }
        } catch (error) {
            console.error("Error updating goods:", error.message);
            throw error;  
        }
    }
    

    async allGoods(){
        const query = "select name, img , category, price, code, mojodi from createnewgoods";
        let [res] = await db.connection.execute(query);
        return res;
    }

    async updateStatusGoods(data){
        const { mojodi , code } = data;
        const query = "update goodsclient set mojodi = ? where code = ? ";
        let res = await db.connection.execute(query , [mojodi , code]);
        return res;
    }

    async allPaymentBuy(data){
        const { id } = data;
        const query = "SELECT name, price, category, code FROM goodsclient WHERE id = ?";
        let [res] = await db.connection.execute(query, [ id ] );
        return res;
    }

    

}

module.exports = new goodsModule();