const appMiddleware=(app)=>{
	app.use(logger);
}
const logger=(req,res,next)=>{
	const currentTime=new Date().toISOString();
	console.log(`Request:[${currentTime}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
	const originalJson=res.json;
	res.json=(data)=>{
		console.log(`Response:[${currentTime}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
		originalJson.call(res,data);
	}
	next();
}
module.exports=appMiddleware;
