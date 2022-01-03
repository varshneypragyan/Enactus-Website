require('dotenv').config();
const express = require('express');
const app = express();
const database = require('./db');

require('./models/member');
require('./models/project');

app.listen(process.env.PORT,()=>{
    console.log("server started on port :" + process.env.PORT);
});