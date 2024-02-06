const db = require('../utlis/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Hanieh"


class authModule{

    async exitRegister(user){
        const { tel } = user;
        const query = "select * from loginRegister where tel = ?"; 
        let [res] = await db.connection.execute(query ,[ tel ]);
        if (res.length > 0) {
            return false;
        }else{return true;}
    }

    async register(items){
        if (await this.exitRegister(items)) {
            const { tel , password , name } = items;
            const query = "insert into loginRegister (tel , password , name) values (? , ? ,?)"; 
            const hashpassword = await bcrypt.hashSync(password , 10)
            console.log(hashpassword);
            let res = await db.connection.execute(query ,[ tel , hashpassword , name])
            return res;
        }else{console.log("user exits");}

    }

    async login(items){
        const {tel , password } = items;
        console.log(password);
        const query = "select password , id from loginRegister where tel = ?";
        let [ list ] = await db.connection.execute(query ,[ tel ]);
        const truePassword = await bcrypt.compareSync(password , list[0].password);
        if (truePassword) {
            const token = jwt.sign({ tel , "id":list[0].id  }, secret , { expiresIn: "1h" });
            console.log("success");
            return token;
        }else {console.log("Invalid credentials")}
    }

    Checkadmin(data){
        let {adminname,adminpassword}=data
        console.log(adminname,adminpassword);
        let username="admin"
        let password="admin"
        if (adminname==username && adminpassword==password) {
            return true
        }
       return false
}

}

module.exports = new authModule();