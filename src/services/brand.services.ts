import express from "express";
import { Brand } from "../database/models/brand.model";
import { AppDataSource } from "../database/data.source";
import { BrandMapper } from "../database/mappers/brand.mapper";

export class BrandService {
    constructor() { }

    Search = async () => {
        var repo = AppDataSource.getRepository(Brand);
        var records = await repo.find({ });
        return records;
    }

    SearchBrandById = async (id: string) => {
        var repo = AppDataSource.getRepository(Brand);
        var records = await repo.find({
            where : {
                    id: id
            },
        });
        return records;
    }

    createBrand = async (req: express.Request) => {
        var repo = AppDataSource.getRepository(Brand);
        const newBrand = repo.create(req.body)
        const createdBrand = await repo.save(newBrand)
        return createdBrand;
    }

    updateBrand = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Brand);
        var records = await repo.findOne({
            where:{
                id:id
            }
        })
        records.Name = req.body.Name;
        records.LogoUrl = req.body.LogoUrl;
        const updatedBrand = await repo.save(records);
        return updatedBrand;
    }

    deleteBrand = async (req: express.Request) => {
        const id = req.params.id;
        var repo = AppDataSource.getRepository(Brand);
        var records = await repo.find({
            where : {
                    id: id
            },
        });
        const deletedBrand = await repo.remove(records);
        return deletedBrand;
    }
}
