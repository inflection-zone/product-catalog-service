import express from "express";
import { ProductImages } from "../entity/product.images.model";
import { AppDataSource } from "../data.source";
import { ProductImageMapper } from "../mapper/product.image.mapper"; // You would need to create this mapper

export class productImageService {
    constructor() { }

    getProductImages = async () => {
        const response = await AppDataSource.manager.find(ProductImages);
        return response;
    }

    getProductImageById = async (id: string) => {
        const response = await AppDataSource.manager.findOne(ProductImages, {
            where: {
                id: id
            }
        });
        return ProductImageMapper.toDto(response);
    }

    createProductImage = async (req: express.Request) => {
        const productImage = new ProductImages();
        productImage.productId = req.body.productId;
        productImage.imageUrl = req.body.imageUrl;

        const response = await AppDataSource.manager.save(productImage);
        return ProductImageMapper.toDto(response);
    }

    updateProductImage = async (req: express.Request) => {
        const id = req.params.id;
        const productImage = await AppDataSource.manager.findOne(ProductImages, {
            where: {
                id: id
            }
        });

        if (!productImage) {
            return null;
        }
        productImage.productId = req.body.productId;
        productImage.imageUrl = req.body.imageUrl;

        const response = await AppDataSource.manager.save(productImage);
        return ProductImageMapper.toDto(response);
    }

    deleteProductImage = async (req: express.Request) => {
        const id = req.params.id;
        const productImage = await AppDataSource.manager.findOne(ProductImages, {
            where: {
                id: id
            }
        });
        const response = await AppDataSource.manager.remove(productImage);
        return ProductImageMapper.toDto(response);
    }
}
