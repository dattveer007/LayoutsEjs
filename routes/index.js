const app=require('express')();
const home=app.get('/',require('../controller/base').welcome);
module.exports={home};