import express from "express";
import { CustomerReview } from "../entity/customer.review.model"; 
import { AppDataSource } from "../data.source";
import { CustomerReviewMapper } from "../mapper/customer.review.mapper"; 

export class customerReviewService {
    constructor() { }
    
    getCustomerReviews = async () => {
        const response = await AppDataSource.manager.find(CustomerReview);
        return response;
    }

    getCustomerReviewById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(CustomerReview, { 
            where:
            {
                id: id
            }
        });
        return CustomerReviewMapper.toDto(response); 
    }

    createCustomerReview = async (req: express.Request) => {
        const customerReview = new CustomerReview();
        customerReview.productId = req.body.productId;
        customerReview.customerId = req.body.customerId;
        customerReview.verifiedPurchase = req.body.verifiedPurchase;
        customerReview.rating = req.body.rating;
        customerReview.title = req.body.title;
        customerReview.description = req.body.description;
        customerReview.foundUsefulCount = req.body.foundUsefulCount;

        const response = await AppDataSource.manager.save(customerReview);
        return CustomerReviewMapper.toDto(response); 
    }

    updateCustomerReview = async (req: express.Request) => {
        const id = req.params.id;
        const customerReview = await AppDataSource.manager.findOne(CustomerReview, {
            where:
            {
                id: id
            }
        });
        customerReview.productId = req.body.productId;
        customerReview.customerId = req.body.customerId;
        customerReview.verifiedPurchase = req.body.verifiedPurchase;
        customerReview.rating = req.body.rating;
        customerReview.title = req.body.title;
        customerReview.description = req.body.description;
        customerReview.foundUsefulCount = req.body.foundUsefulCount;

        const response = await AppDataSource.manager.save(customerReview);
        return CustomerReviewMapper.toDto(response); 
    }

    deleteCustomerReview = async (req: express.Request) => {
        const id = req.params.id;
        const customerReview = await AppDataSource.manager.findOne(CustomerReview, {
            where:
            {
                id: id
            }
        });

        const response = await AppDataSource.manager.remove(customerReview);
        return CustomerReviewMapper.toDto(response); 
    }
}
