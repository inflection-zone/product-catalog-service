import express from 'express'
//import loader
//import authenticator

export const register = (app: express.Application) : void =>{
    
    const router = express.Router();
    //authenticator
    //controller

    // basic routes
    router.post('/') // create product merchant
    router.get('/') // get all product merchants
    router.get('/:id') // get product merchant by id
    router.put('/:id') // update product merchant by id
    router.delete('/:id') // delete product merchant by id

    //routes for api key?

    
    //search routes using criteria
    router.get('/productId/:productId') // search by product id
    router.get('/merchantId/:merchantId') // search by merchant id
    router.get('/includeShipping/:includeShipping') // search by whether shipping included

    app.use('/api/v1/productMerchant/', router)
}