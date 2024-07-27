const setupMiddleware=(app)=>{
    app.use(logger);
}
const logger=(req,res,next)=>{
    console.log('Request Method',req.method);
    console.log('Request URL:',req.originalUrl);
    console.log('Request IP Address:',req.ip); 
    next();
}
module.exports=setupMiddleware;