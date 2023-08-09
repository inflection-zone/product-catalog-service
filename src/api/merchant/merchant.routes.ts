import express from 'express'
import { MerchantController } from './merchant.controller';
//import loader
//import authenticator

export const register = (app: express.Application) : void =>{
    
    const router = express.Router();
    //authenticator
    const controller = new MerchantController();

    router.post('/', controller.create) // create customer

    router.get('/', controller.get) // get all customers

    router.get('/:id', controller.getById) // get customer by id

    router.put('/:id', controller.update) // update customer by id

    router.delete('/:id', controller.delete) // delete customer by id

    //routes for api key?

    app.use('/api/v1/customer', router)
}