const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./config/database');
const blogRoutes = require('./routes/blogRoutes')

app.use(express.json());
app.use("/api/v1", blogRoutes);

app.listen(process.env.PORT , () =>
{
    console.log("Server started Succesfully");
});

dbConnect();

app.get('/' , (req , res)=>{
    res.send("<h1> This is Home Page </h1>");
});