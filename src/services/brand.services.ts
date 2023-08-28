import express from "express";
import { Brand } from "../database/models/brand.model";
import { Source } from "../database/database.connector.typeorm";
import { BrandMapper } from "../database/mappers/brand.mapper";

export class BrandService {
    private _repo = Source.getRepository(Brand)

    Search = async () => {
        var records = await this._repo.find({ });
        return records;
    }

    SearchBrandById = async (id: string) => {
        var records = await this._repo.find({
            where : {
                    id: id
            },
        });
        return records;
    }

    createBrand = async (req: express.Request) => {
        const newBrand = this._repo.create(req.body)
        const createdBrand = await this._repo.save(newBrand)
        return createdBrand;
    }

    updateBrand = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.findOne({
            where:{
                id:id
            }
        })
        records.Name = req.body.Name;
        records.LogoUrl = req.body.LogoUrl;
        const updatedBrand = await this._repo.save(records);
        return updatedBrand;
    }

    deleteBrand = async (req: express.Request) => {
        const id = req.params.id;
        var records = await this._repo.find({
            where : {
                    id: id
            },
        });
        const deletedBrand = await this._repo.remove(records);
        return deletedBrand;
    }
}
