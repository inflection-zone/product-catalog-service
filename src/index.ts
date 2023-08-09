//import { AppDataSource } from "../database/database.connector"

import { Source } from './database/database.connector.typeorm'
import express from 'express'
import Application from './app'
import { Router } from './api/router'
import {CustomerController} from './api/customer/customer.controller'


const main = async () => {

    const app = Application.getInstance()
    app.start()

    Source.connect()

    // AppDataSource.initialize().then(async () => {
    //     //const customer1 = new Customer()

    //     // console.log("Loading users from the database...")
    //     // const users = await AppDataSource.manager.find(Customer)
    //     // console.log("Loaded users: ", users)

    //     // console.log("Here you can setup and run express / fastify / any other framework.")

    // }).catch(error => console.log(error))

   

}

main()
