require('dotenv').config();
const express=require('express');
const router=express.Router();
const app=express();
const appMiddleware=require('./core/middleware.js');
const globalRouter=require('./core/routes.js');

//middleware
appMiddleware(app);
//routes
globalRouter(app);

//expose port
const port=process.env.PORT || 3000;
app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});
