import express from "express";
import { ProductOffer } from "../database/models/product.offer.model";
import { AppDataSource } from "../database/data.source";
import { ProductOfferMapper } from "../database/mappers/product.offer.mapper";
export class ProductOfferService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(ProductOffer);
        var records = await repo.find({
            relations: {
                ProductId : true
            }
        });
        return records;
    }

    SearchOfferById = async (id:string) => {
        var repo = AppDataSource.getRepository(ProductOffer);
        var records = await repo.find({
            where : {
                    id: id
            },
            relations: {
                ProductId : true
            }
        });
        return records;
    }

    createProductOffer = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(ProductOffer);
        const newProductOffer = repo.create(req.body)
        const createdProductOffer = await repo.save(newProductOffer)
        return createdProductOffer;
    }
    
    updateProductOffer = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(ProductOffer);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        records.ProductId = req.body.ProductId;
        records.Details = req.body.Details;
        records.Title = req.body.Title;
        const updatedProduct = await repo.save(records);
        return updatedProduct;
    }

    deleteProductOffer = async (req: express.Request) => {
            const id = req.params.id;
            var repo = AppDataSource.getRepository(ProductOffer);
            var records = await repo.find({
                where : {
                        id: id
                },
                relations: {
                    ProductId : true
                }
            });
            const deletedProductOffer = await repo.remove(records);
            return deletedProductOffer;
        }
}