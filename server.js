const express = require("express");
const app = express();

const cors = require('cors');
const connectDb = require('./configs/dbConnection');
const cookieParser = require('cookie-parser');
const env = require("dotenv").config();

// middlewares
app.use(cookieParser())
app.use(express.json())


app.use(express.json());
app.use(cors());

app.use("/api/users",require('./routes/userRoutes'));

connectDb();
 
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})