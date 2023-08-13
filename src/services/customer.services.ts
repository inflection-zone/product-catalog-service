import express from "express";
import { customer } from "../entity/customer";
import { AppDataSource } from "../data-source";



export class customerService {
    constructor() { }
    getBrand = async () => {
        const response = await AppDataSource.manager.find(customer);
        return response;
    }

    getByIdBrand = async (id: string) => {
        const response = await AppDataSource.manager.findOne(customer, { 
            where:
            {
                id:id
            }
        });
        return customerMapper.toDto(response);
    }

    createBrand = async (req: express.Request) => {
        const cust = new customer();
        customer.id = req.body.id;
        customer.prodcutid = req.body.prodcutid;
        customer.customerid = req.body.customerid;
        customer.verifiedpurchase = req.body.verifiedpurchase;
        customer.rating = req.body.rating;
        customer.description = req.body.description;
        customer.foundusefulcount=req.body.foundusefulcount;
        const response =await AppDataSource.manager.save(customer);
        return customer.toDto(response);
    }

    updateBrand = async (req: express.Request) => {
        const id = req.params.id;
        const cust = await AppDataSource.manager.findOne(customer, {
            where:
            {
                id:id
            }
        }) ;
        customer.id = req.body.id;
        customer.prodcutid = req.body.prodcutid;
        customer.customerid = req.body.customerid;
        customer.verifiedpurchase = req.body.verifiedpurchase;
        customer.rating = req.body.rating;
        customer.description = req.body.description;
        customer.foundusefulcount=req.body.foundusefulcount;
        const response =await AppDataSource.manager.save(customer);
        return customerMapper.toDto(response);
    }

    deleteBrand = async (req: express.Request) => {
        const id = req.params.id;
        const brand = await AppDataSource.manager.findOne(customer,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(brand);
        return customerMapper.toDto(response);
    }
}

