const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth.routes");
const goodRoutes = require("./Routes/good.routes");

const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/good", goodRoutes);
app.use("/api/good", goodRoutes);
app.use("/api/good", goodRoutes);
app.use("/api/good", goodRoutes);
app.use("/api/good", goodRoutes);
app.use("/api/good", goodRoutes);

app.listen(port ,()=>{
    console.log(`server listening on port ${port}`);
})