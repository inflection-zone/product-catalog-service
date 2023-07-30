import express from 'express'
import { CustomerService } from '../../services/customer.service'
import { Customer } from '../../database/models/customer'


export class CustomerController{

    private _customerService: CustomerService

    constructor(){
        this._customerService = new CustomerService();
    }

    public post = async(req: express.Request, res: express.Response) => {
        try{
            const message = await this._customerService.create(req)
            res.send(message)
        }catch(error){
            res.send(error)
        }
    }

    public get = async(req: express.Request, res: express.Response) => {
        try {
            const message = await this._customerService.get(req)
            res.send(message)
        }catch(error){
            res.send(error)
        }
    }

    public getById = async(req: express.Request, res: express.Response) => {
        try {
            const message = await this._customerService.getById(req)
            res.send(message)
        }catch(error){
            res.send(error)
        }
    }

    public put = async(req: express.Request, res: express.Response) => {
        try {
            const message = await this._customerService.put(req)
            res.send(message)
        }catch(error){
            res.send(error)
        }
    }

    public delete = async(req: express.Request, res: express.Response) => {
        try {
            const message = await this._customerService.delete(req)
            res.send(message)
        }catch(error){
            res.send(error)
        }
    }


}