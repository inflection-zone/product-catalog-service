import express from "express";
import { Feature } from "../database/models/feature.model";
import { AppDataSource } from "../database/data-source";
import { FeatureMapper } from "../database/mapper/feature.mapper";
export class FeatureService {
    private _repo = AppDataSource.getRepository(Feature)
    // constructor() { }

    Search = async () => {
          var record = await this._repo.find({
            // relations: {
            //     ProductId : true
            // }
        });
        return record;
    }

    SearchFeatureById = async (id:string) => {
        var repo = AppDataSource.getRepository(Feature);
        var records = await repo.find({
            where : {
                featureId: id
            },
            // relations: {
            //     ProductId : true
            // }
        });
        return records;
    }

    createFeature = async (req: express.Request) => {
        const entity = {
            featureId: req.body.featureId,
            Name: req.body.Name,
            Description: req.body.Description,
            ImageUrl: req.body.ImageUrl
        }
        const newfeature = await this._repo.create(entity);
        const record = await this._repo.save(newfeature);
        const dto = FeatureMapper.toDto(record)
        return dto;
    }
    
    updateFeature = async (req: express.Request) => {
        const id = req.params.id;
       const record = await this._repo.findOne({
            where:{
                featureId:id
            }
        })
        if (req.body.Name != null) {
            record.Name = req.body.Name;
        }
        if(req.body.Description!=null){
            record.Description = req.body.Description;
        }
        if(req.body.ImageUrl!=null){
            record.ImageUrl = req.body.ImageUrl;
        }
        const updatedFeature = await this._repo.save(record);
        return updatedFeature;
    }

    deleteFeature = async (req: express.Request) => {
            const id = req.params.id;
            var repo = AppDataSource.getRepository(Feature);
            var records = await repo.find({
                where : {
                        featureId: id
                },
                // relations: {
                //     ProductId : true
                // }
            });
            const deletedFeature = await repo.remove(records);
            return deletedFeature;
        }
}         
     
           