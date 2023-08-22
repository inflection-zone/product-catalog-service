import express from 'express'
import { ProductImageController } from '../controllers/product.image.controller';
//import loader
//import authenticator
import {authorize} from '../auth/authenticator'

export const register = (app: express.Application) : void =>{
    
    const router = express.Router();
    //authenticator
    const controller = new ProductImageController();

    router.post('/login', controller.login)

    router.post('/', controller.create) // create customer

    router.post('/login', controller.login)

    router.get('/', authorize, controller.get) // get all customers

    router.get('/:id', authorize, controller.getById) // get customer by id

    router.put('/:id', authorize, controller.update) // update customer by id

    router.delete('/:id', authorize, controller.delete) // delete customer by id

    //routes for api key?

    app.use('/api/v1/productImage', router)
}