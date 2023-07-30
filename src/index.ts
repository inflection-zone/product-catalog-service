//import { AppDataSource } from "../database/database.connector"

import { AppDataSource } from './database/datasource'
import express from 'express'
import Application from './app'
import { Router } from './api/router'
import {CustomerController} from './api/customer/customer.controller'


const main = async () => {

    AppDataSource.initialize().then(async () => {
        //const customer1 = new Customer()
        console.log("Data source initialized")

        const app = Application.getInstance()
        app.start()

        

        console.log("Inserting a new user into the database...")
  

        // console.log("Loading users from the database...")
        // const users = await AppDataSource.manager.find(Customer)
        // console.log("Loaded users: ", users)

        // console.log("Here you can setup and run express / fastify / any other framework.")

    }).catch(error => console.log(error))

   

}

main()
