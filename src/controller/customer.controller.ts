import express, { response } from "express";
import {CustomerReviewMapper}



export class CustomerReviewService{
    constructor(){
         getCustomerReview =async () =>{
            const repsonse =await AppDataSource.AppDataSource.manager.find(CustomerReview);
            return repsonse;
         }

         getCustomerReviewById = async (id:String)=>{
            const repsonse =await AppDataSource.manager.findOne(CustomerReview,{
                where:
                {
                    id:id
                }
            });
            return CustomerReviewMapper.toDto(response);
         }

         createCustomerReview =async (req:express.Request)=>{
            const customerreview =new CustomerReview();
            customer.id = req.body.id;
        customer.prodcutid = req.body.prodcutid;
        customer.customerid = req.body.customerid;
        customer.verifiedpurchase = req.body.verifiedpurchase;
        customer.rating = req.body.rating;
        customer.description = req.body.description;
        customer.foundusefulcount=req.body.foundusefulcount;

        const repsonse =await AppDataSource.manager.save(customerreview);
        return CustomerReviewMapper.toDto(repsonse);
         }

         updateCustomerReview =async (req:express.Request)=>{
            const id=req.params.id;
            const CustomerReview = await AppDataSource.manager.findOne(CustomerReview,{
                where:
                {
                    id:id
                }
            });
            customer.id = req.body.id;
        customer.prodcutid = req.body.prodcutid;
        customer.customerid = req.body.customerid;
        customer.verifiedpurchase = req.body.verifiedpurchase;
        customer.rating = req.body.rating;
        customer.description = req.body.description;
        customer.foundusefulcount=req.body.foundusefulcount;

        const repsonse =await AppDataSource.manager.save(CustomerReview);
        return CustomerReviewMapper.toDto(repsonse);
         }

         deleteCustomerReview=async(req:express.Request)=>{
            const id= req.params.id;
            const customerreview=await AppDataSource.manager.findOne(CustomerReview,{
                where:
                {
                    id:id
                }
            });
            const repsonse=await AppDataSource.manager.remove(CustomerReview);
            return CustomerReviewMapper.toDto(repsonse);
         }
    }
}