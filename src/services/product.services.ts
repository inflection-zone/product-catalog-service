import express from "express";
import { Product } from "../entity/product.model";
import { AppDataSource } from "../data.source";
import { ProductMapper } from "../mapper/product.mapper";

export class productService {
    constructor() { }

    getProduct = async () => {
        const response = await AppDataSource.manager.find(Product);
        return response;
    }

    getProductById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(Product, {
            where: {
                id: id
            }
        });
        return ProductMapper.toDto(response);
    }

    createProduct = async (req: express.Request) => {
        const product = new Product();
        product.name = req.body.name;
        product.description = req.body.description;
        product.categoryId = req.body.categoryId;
        product.brandId = req.body.brandId;
        product.basePrice = parseInt(req.body.basePrice);
        product.taxes = parseInt(req.body.taxes);
        product.manufacturerName = req.body.manufacturerName;
        product.manufacturerPartNumber = req.body.manufacturerPartNumber;
        const response = await AppDataSource.manager.save(product);
        return ProductMapper.toDto(response);
    }

    updateProduct = async (req: express.Request) => {
        const id = req.params.id;
        const product = await AppDataSource.manager.findOne(Product, {
            where: {
                id: id
            }
        });
        product.name = req.body.name;
        product.description = req.body.description;
        product.categoryId = req.body.categoryId;
        product.brandId = req.body.brandId;
        product.basePrice = parseInt(req.body.basePrice);
        product.taxes = parseInt(req.body.taxes);
        product.manufacturerName = req.body.manufacturerName;
        product.manufacturerPartNumber = req.body.manufacturerPartNumber;

        const response = await AppDataSource.manager.save(product);
        return ProductMapper.toDto(response);
    }

    deleteProduct = async (req: express.Request) => {
        const id = req.params.id;
        const product = await AppDataSource.manager.findOne(Product, {
            where: {
                id: id
            }
        });
        const response = await AppDataSource.manager.remove(product);
        return ProductMapper.toDto(response);
    }
}