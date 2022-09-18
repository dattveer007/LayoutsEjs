const welcome=(req,res)=>{
   return res.render('_signinup',{
      title:"Welcome",
   });
}
module.exports={welcome};