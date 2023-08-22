import express from 'express'
import { ProductMerchantController } from '../controllers/product.merchant.controller';
//import loader
//import authenticator

export const register = (app: express.Application) : void =>{
    
    const router = express.Router();
    //authenticator
    const controller = new ProductMerchantController();

    router.post('/', controller.create) // create pm

    router.post('/login', controller.login) //login

    router.get('/', controller.get) // get all pms

    router.get('/:id', controller.getById) // get pm by id

    router.put('/:id', controller.update) // update pm by id

    router.delete('/:id', controller.delete) // delete pm by id

    //routes for api key?

    app.use('/api/v1/productMerchant', router)
}