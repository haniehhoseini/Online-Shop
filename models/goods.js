const db = require('../utlis/database');

class goodsModule{

    async insertGoodClient(data){
        const { code , id } = data;
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

    async updateGoods(items) {
        try {
            const { name, pictureURL, category, price , code} = items;
            const query = "UPDATE createnewgoods SET name = ?, pictureURL = ?, category = ?, price = ? WHERE code = ?";
            
            const res = await db.connection.execute(query, [name, pictureURL, category, price, code]);
    
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
        const query = "select name, pictureURL, category, price, code from createnewgoods";
        let res = await db.connection.execute(query);
        return res;
    }

    async updateStatusGoods(data){
        const { status , id } = data;
        const query = "update goodsclient set status = ? where id = ? ";
        let res = await db.connection.execute(query , [status , id]);
        return res;
    }

}

module.exports = new goodsModule();