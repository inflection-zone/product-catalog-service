import express from "express";
import { ProductDiscounts } from "../database/models/product.discounts.model"; 
import { AppDataSource } from "../database/data.source";
import { ProductDiscountMapper } from "../database/mappers/product.discount.mapper"; 

export class productDiscountService {
    constructor() { }

    getProductDiscounts = async () => {
        const response = await AppDataSource.manager.find(ProductDiscounts);
        return response;
    }

    getProductDiscountById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(ProductDiscounts, {
            where:
            {
                id: id
            }
        });
        return ProductDiscountMapper.toDto(response);
    }

    createProductDiscount = async (req: express.Request) => {
        const productDiscount = new ProductDiscounts();
        productDiscount.productId = req.body.productId;
        productDiscount.merchantId = req.body.merchantId;
        productDiscount.discountType = req.body.discountType;
        productDiscount.discount = req.body.discount;
        productDiscount.discountForVolume = req.body.discountForVolume;

        const response = await AppDataSource.manager.save(productDiscount);
        return ProductDiscountMapper.toDto(response);
    }

    updateProductDiscount = async (req: express.Request) => {
        const id = req.params.id;
        const productDiscount = await AppDataSource.manager.findOne(ProductDiscounts, {
            where:
            {
                id: id
            }
        });
        productDiscount.productId = req.body.productId;
        productDiscount.merchantId = req.body.merchantId;
        productDiscount.discountType = req.body.discountType;
        productDiscount.discount = req.body.discount;
        productDiscount.discountForVolume = req.body.discountForVolume;

        const response = await AppDataSource.manager.save(productDiscount);
        return ProductDiscountMapper.toDto(response);
    }

    deleteProductDiscount = async (req: express.Request) => {
        const id = req.params.id;
        const productDiscount = await AppDataSource.manager.findOne(ProductDiscounts, {
            where:
            {
                id: id
            }
        });

        const response = await AppDataSource.manager.remove(productDiscount);
        return ProductDiscountMapper.toDto(response);
    }
}
