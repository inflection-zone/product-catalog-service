import express from "express";
import { ProductDetails } from "../database/models/product.details.model";
import { AppDataSource } from "../database/data-source";
import { ProductDetailsMapper } from "../database/mapper/product.details.mapper";
export class ProductDetailsService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(ProductDetails);
        var records = await repo.find({
            // relations: {
            //     ProductId : true
            //  }
        });
        return records;
    }

    SearchProductDetailsById = async (id:string) => {
        var repo = AppDataSource.getRepository(ProductDetails);
        var records = await repo.find({
            where : {
                productDetailsid: id
            },
            // relations: {
            //     ProductId : true
            
            // }
        });
        return records;
    }

    createProductDetails = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(ProductDetails);
        const entity = {
            productId : req.body.productId,
            Information : req.body.Information,
            AdditionalInformation : req.body.AdditionalInformation,
            TechnicalDetails : req.body.TechnicalDetails,
            PartNumber : req.body.PartNumber,
            ModelNumber : req.body.ModelNumber,
            CountryOfOrigin : req.body.CountryOfOrigin,
            ItemWeight : parseInt(req.body.ItemWeight),
            ItemDimensions : req.body.ItemDimensions,
            PackItemCount : parseInt(req.body.PackItemCount),
        }
        const newProductDetails = repo.create(entity)
        const createdProductDetails = await repo.save(newProductDetails)
        return createdProductDetails;
    }
    
    updateProductDetails = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(ProductDetails);
        var records = await repo.findOne({
            where:{
                productDetailsid:id
            }
        })
        records.ProductId = req.body.ProductId;
        records.Information = req.body.Information;
        records.AdditionalInformation = req.body.AdditionalInformation;
        records.TechnicalDetails = req.body.TechnicalDetails;
        records.PartNumber = req.body.PartNumber;
        records.ModelNumber = req.body.ModelNumber;
        records.CountryOfOrigin = req.body.CountryOfOrigin;
        records.ItemWeight = parseInt(req.body.ItemWeight);
        records.ItemDimensions = req.body.ItemDimensions;
        records.PackItemCount = parseInt(req.body.PackItemCount);
        const updatedProductDetails = await repo.save(records);
        return updatedProductDetails;
    }

    deleteProductDetails = async (req: express.Request) => {
            const id = req.params.id;
            var repo = AppDataSource.getRepository(ProductDetails);
            var records = await repo.find({
                where : {
                    productDetailsid: id
                },
                // relations: {
                //     ProductId : true
                //     }
            });
            const deletedProductDetails = await repo.remove(records);
            return deletedProductDetails;
        }
}       
    