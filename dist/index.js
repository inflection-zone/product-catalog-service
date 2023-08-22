"use strict";
// import { DatabaseConnector } from "./database/database.connector"
// //import { Customer } from ".database/models/customer"
// import {DataSource, createConnection} from 'typeorm'
// import {request, response} from 'express'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
const port = 3000;
(0, typeorm_1.createConnection)({ name: "product-catalog",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "mydb"
}).then(() => {
    console.log("DB connected");
}).catch((e) => {
    console.log("Error:" + e);
});
app.get('/test', (req, res) => {
    res.json({
        data: "test done"
    });
});
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
// const main = async ()=>{
//     // const dbconnector = new DatabaseConnector()
//     // DatabaseConnector._dataSource.initialize().then(async  () =>{
//     //     console.log("tables made?")
//     // } )
//     console.log("Main called")
//     const appDS = new DataSource({
//         type: 'mysql', 
//         host: 'localhost',
//         username: 'root',
//         password: 'root',
//         port : 3306
//     })
//     console.log("Datasource created")
//     appDS.initialize().then( () => {
// //     //const customer1 = new Customer()
//        console.log("Tables created")
// //     // console.log("Inserting a new user into the database...")
// //     // const user = new Customer()
// //     // user.firstName = "Timber"
// //     // user.lastName = "Saw"
// //     // user.age = 25
// //     // await AppDataSource.manager.save(user)
// //     // console.log("Saved a new user with id: " + user.id)
// //     // console.log("Loading users from the database...")
// //     // const users = await AppDataSource.manager.find(Customer)
// //     // console.log("Loaded users: ", users)
// //     // console.log("Here you can setup and run express / fastify / any other framework.")
//  }).catch(error => {
//     console.log("craps out")
//     console.log(error)
//  })
// }
// main()
