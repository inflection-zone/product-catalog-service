import express from 'express'
import { ProductOfferController } from '../controllers/product.offer.controller';
//import loader
//import authenticator
import {authorize} from '../auth/authenticator'

export const register = (app: express.Application) : void =>{
    
    const router = express.Router();
    //authenticator
    const controller = new ProductOfferController();


    router.post('/', controller.create) // create customer

    //router.post('/login', controller.login)

    router.get('/', authorize, controller.get) // get all customers

    router.get('/:id', authorize, controller.getById) // get customer by id

    router.put('/:id', authorize, controller.update) // update customer by id

    router.delete('/:id', authorize, controller.del) // delete customer by id

    //routes for api key?

    app.use('/api/v1/productOffer', router)
}
