const app=require('express')();
const path=require('path');
const layouts=require('express-ejs-layouts');
const portno=3000;
app.use(layouts);
app.use(require('express').static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views',path.join(__dirname+'views'));
app.use('/',require('./routes/index').home);
app.listen(portno,(error)=>{
    if(error){
        console.error.bind(console,error);
        return;
    }
    console.log(`Server is Running at portno: ${portno}`);
})