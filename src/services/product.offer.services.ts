import express from "express";
import { ProductOffer } from "../database/models/product.offer.model";
import { Source } from "../database/database.connector.typeorm";
import { ProductOfferMapper } from "../database/mappers/product.offer.mapper";
export class ProductOfferService {
    private _repo = Source.getRepository(ProductOffer)

    Search = async () => {
        var records = await this._repo.find({
            relations: {
                ProductId : true
            }
        });
        return records;
    }

    SearchOfferById = async (id:string) => {
        var records = await this._repo.find({
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
        const newProductOffer = this._repo.create(req.body)
        const createdProductOffer = await this._repo.save(newProductOffer)
        return createdProductOffer;
    }
    
    updateProductOffer = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.findOne({
            where:{
                id:id
            }
        })
        records.ProductId = req.body.ProductId;
        records.Details = req.body.Details;
        records.Title = req.body.Title;
        const updatedProduct = await this._repo.save(records);
        return updatedProduct;
    }

    deleteProductOffer = async (req: express.Request) => {
            const id = req.params.id;
            var records = await this._repo.find({
                where : {
                        id: id
                },
                relations: {
                    ProductId : true
                }
            });
            const deletedProductOffer = await this._repo.remove(records);
            return deletedProductOffer;
        }
}