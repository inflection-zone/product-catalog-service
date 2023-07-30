import express from 'express'
//import loader, authenticator, controller

export const register = (app : express.Application) => { 
    const router = express.Router()

    //basic inventory routes
    router.post('/') // create inventory
    router.get('/') //get all inventory
    router.get('/:id') //get inventory by id
    router.put('/:id') //update inventory by id
    router.delete('/:id') //delete inventory by id

    
    //routes by search criteria
    router.get('/merchantId/:merchantId') // get by merchant id
    router.get('/productId/:productId') // get by product id
    router.get('/batchNumber/:batchNumber') // get by batch number

    app.use('/api/v1/inventory/', router)
}