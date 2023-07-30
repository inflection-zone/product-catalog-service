import express from 'express'
//import loader, authenticator, controller

export const register = (app: express.Application) => {
    const router = express.Router()

    router.post('/') // create merchant
    router.get('/') // get all merchants
    router.get('/:id') // get merchant by id
    router.put('/:id') // update merchant by id
    router.delete('/:id') // delete merchant by id

    //api key routes?

    app.use('/api/v1/merchant', router)
}