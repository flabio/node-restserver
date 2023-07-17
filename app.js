
require('dotenv').config();
const Server =require('./models/server');
const server = new Server();
server.listen();
//npm i express 
//npm i dotenv
//npm i cors