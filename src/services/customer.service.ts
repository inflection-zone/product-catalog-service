import express from 'express'
import { AppDataSource } from '../database/datasource'
import { Customer } from '../database/models/customer'
import bodyParser from 'body-parser'


export class CustomerService {

    public create = async (req: express.Request) => {
        try {
            const newCustomer = new Customer()
            newCustomer.customerName = req.body.customerName
            newCustomer.customerTaxNumber = req.body.customerTaxNumber
            newCustomer.phone = req.body.phone
            newCustomer.email = req.body.customerEmail
            newCustomer.profileImage = req.body.profileImage
            await AppDataSource.manager.save(newCustomer)

            const message = "New user saved successfully"
            return message
        }catch(error){
            console.log(error)
        }
        
    }


    public get = async (req: express.Request) => {
        try{
            const customers = await AppDataSource.manager.find(Customer)
            return customers

        }catch(error){
            return "Bad request"
        }
    }

    
    public getById = async (req: express.Request) => {
        try{
            const customer = await AppDataSource.manager.findOneBy(Customer, {
                customerId:parseInt(req.params.id)
            })
            return customer

        }catch(error){
            return "Bad request"
        }
    }


    public put = async(req: express.Request) => {
        try {
            const customer = await AppDataSource.manager.findOneBy(Customer, {
                customerId:parseInt(req.params.id)
            })
            customer.customerName = req.body.customerName
            customer.customerTaxNumber = req.body.customerTaxNumber
            customer.phone = req.body.phone
            customer.email = req.body.email
            customer.profileImage = req.body.profileImage
            await AppDataSource.manager.save(customer)

            const message = "Customer details changed successfully"
            return message

        }catch(error){
            return "Bad request"
        }
    }


    public delete = async(req: express.Request) => {

        try {
           await AppDataSource.manager.delete(Customer, {
            customerId: req.params.id
           })

           return "Customer deleted successfully"
            
        }catch(error){
            return "Bad request"
        }
        
    }
}