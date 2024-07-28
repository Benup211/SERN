# SERN Day Two

Topics Learned

- Express Router
    ```javascript
    const router=express.Router();
    ```
- Dotenv
    ```javascript
    require('dotenv').config();
    process.env.ENV_NAME;
    ```
- Middleware
- App Use for routing

    - app.route()
    ```javascript
    app.router('/').get().post().put()
    ```
    - express Router
    ```javascript
    const router = express.Router()
    router.get('/profile',(res,req)=>{
        res.send("User Profile");
    })
    module.exports=router;
    ```
    - registering the router
    ```javascript
    const userEndpoint=require('..');
    app.use('/users',userEndpoint);
    ```