import express from "express";
import { Brand } from "../entity/brand.model";
import { AppDataSource } from "../data.source";
import { BrandMapper } from "../mapper/brand.mapper";

export class brandService {
    constructor() { }
    getBrand = async () => {
        const response = await AppDataSource.manager.find(Brand);
        return response;
    }

    getByIdBrand = async (id: string) => {
        const response = await AppDataSource.manager.findOne(Brand, { 
            where:
            {
                id:id
            }
        });
        return BrandMapper.toDto(response);
    }

    createBrand = async (req: express.Request) => {
        const brand = new Brand();
        brand.name = req.body.name;
        brand.logoUrl = req.body.logoUrl;
        const response =await AppDataSource.manager.save(brand);
        return BrandMapper.toDto(response);
    }

    updateBrand = async (req: express.Request) => {
        const id = req.params.id;
        const brand = await AppDataSource.manager.findOne(Brand, {
            where:
            {
                id:id
            }
        }) ;
        brand.name = req.body.name;
        brand.logoUrl = req.body.logoUrl;
        const response =await AppDataSource.manager.save(brand);
        return BrandMapper.toDto(response);
    }

    deleteBrand = async (req: express.Request) => {
        const id = req.params.id;
        const brand = await AppDataSource.manager.findOne(Brand,{
            where:
            {
                id:id
            }
        });
        const response = await AppDataSource.manager.remove(brand);
        return BrandMapper.toDto(response);
    }
}





// getBrand = async (req: express.Request) => {
//     const response= AppDataSource.manager.find(Brand);
//     return response
// }
// getByIdBrand = async (id: string) => {
//     const response = AppDataSource.manager.findOne(Brand, {where:{id:id}})
//     return response;
// }
// createBrand = async (req: express.Request) => {
//     const brand = new Brand();
//     brand.name = brandService.name;
//     brand.logoUrl = req.body.logoUrl;
//     const response = AppDataSource.manager.save(brand);
//     return response;
// }
// updateBrand = async (req: express.Request) => {
//     const id = req.params.id;
//     const brand = await AppDataSource.manager.findOne(Brand,{where:{id:id}});
//     brand.name = req.body.name;
//     brand.logoUrl = req.body.logoUrl;
//     const response = AppDataSource.manager.save(brand);
//     return response;
// }
// deleteBrand = async (req: express.Request) => {
//     const id = req.params.id;
//     const brand = await AppDataSource.manager.findOne(Brand,{where:{id:id}});
//     const response = AppDataSource.manager.remove(brand);
//     return response;
// }
// }

// deleteBrand = async (req: express.Request, id: string) => {
    //     const brand = await AppDataSource.manager.findOne(Brand, { where: { id: id } });
    //     if (!brand) {
    //         throw new Error("Brand not found");
    //     }
    //     return AppDataSource.manager.remove(brand);
    // }