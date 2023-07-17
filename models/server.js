const express=require('express');
const cors=require('cors');
class Server{
    constructor(){
     this.app = express();
     this.port=process.env.PORT;
     this.path='/api/v1'
     this.userRouterPath='/user'
     //Middleware
     this.middlewares();
     //Rutas de la application
     this.routes();
    };

    middlewares(){
        
        //CORS
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json());
        
        //Directory public
        this.app.use(express.static('public'));
    };
    
    routes(){
       this.app.use(this.path+this.userRouterPath,require('../routes/user-router'));
    };
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server listening on port:",this.port);
        });
    };
}


module.exports = Server;