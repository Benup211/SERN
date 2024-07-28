const globalRouter=(app)=>{
    const usersView=require('../users/views.js');
    app.route('/')
        .get((req,res)=>{
            res.status(200).json({"message":"Hello World!"});
        });
    app.use('/users',usersView);
}
module.exports=globalRouter;