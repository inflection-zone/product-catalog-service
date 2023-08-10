import express from "express";
import { ProductDetails } from "../database/models/product.details.model"; 
import { AppDataSource } from "../database/data.source";
import { ProductDetailsMapper } from "../database/mappers/product.details.mapper";

export class productDetailsService {
    constructor() { }
    getProductDetails = async () => {
        const response = await AppDataSource.manager.find(ProductDetails);
        return response;
    }

    getByIdProductDetails = async (id: string) => {
        const response = await AppDataSource.manager.findOne(ProductDetails, { 
            where:
            {
                id:id
            }
        });
        return ProductDetailsMapper.toDto(response);
    }

    createProductDetails = async (req: express.Request) => {
        const productDetails = new ProductDetails();
        productDetails.productId = req.body.productId;
        productDetails.information = req.body.information;
        productDetails.additionalInformation = req.body.additionalInformation;
        productDetails.technicalDetails = req.body.technicalDetails;
        productDetails.partNumber = req.body.partNumber;
        productDetails.modelNumber = req.body.modelNumber;
        productDetails.countryOfOrigin = req.body.countryOfOrigin;
        productDetails.itemWeight = req.body.itemWeight;
        productDetails.itemDimensions = req.body.itemDimensions;
        productDetails.packItemCount = req.body.packItemCount;
        const response =await AppDataSource.manager.save(productDetails);
        return ProductDetailsMapper.toDto(response);
    }

    updateProductDetails = async (req: express.Request) => {
        const id = req.params.id;
        const productDetails = await AppDataSource.manager.findOne(ProductDetails, {
            where:
            {
                id:id
            }
        }) ;
        productDetails.productId = req.body.productId;
        productDetails.information = req.body.information;
        productDetails.additionalInformation = req.body.additionalInformation;
        productDetails.technicalDetails = req.body.technicalDetails;
        productDetails.partNumber = req.body.partNumber;
        productDetails.modelNumber = req.body.modelNumber;
        productDetails.countryOfOrigin = req.body.countryOfOrigin;
        productDetails.itemWeight = req.body.itemWeight;
        productDetails.itemDimensions = req.body.itemDimensions;
        productDetails.packItemCount = req.body.packItemCount;
        const response =await AppDataSource.manager.save(productDetails);
        return ProductDetailsMapper.toDto(response);
    }

    deleteProductDetails = async (req: express.Request) => {
        const id = req.params.id;
        const productDetails = await AppDataSource.manager.findOne(ProductDetails,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(productDetails);
        return ProductDetailsMapper.toDto(response);
    }
}
