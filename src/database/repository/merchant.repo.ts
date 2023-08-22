import { MerchantDomainEntity } from "../../domain.types/merchant/merchant.domain.entity";
import { MerchantDto } from "../../domain.types/merchant/merchant.dto";
import { IMerchantRepo } from "../repository.interface/merchant.repo.interface";
import {Source} from '../database.connector.typeorm'
import { Merchant } from "../models/merchant";
import { MerchantMapper } from "../mappers/merchant.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { createJwtToken } from "../../auth/authenticator";
import { ResponseHandler } from "../../common/response.handler";

export class MerchantRepo implements IMerchantRepo {

    private _MerchantRepo = Source.getRepository(Merchant)


    create = async(model: MerchantDomainEntity) : Promise<MerchantDto> => {
        try{
            const entity = {
                MerchantName: model.MerchantName,
                Email : model.Email,
                Password : model.Password,
                Address: model.Address,
                AverageRatings : model.AverageRatings,
                Url : model.Url,
                Logo: model.Logo
                
            }
    
            const Merchant = await this._MerchantRepo.create(entity)
            const record = await this._MerchantRepo.save(Merchant)
            const dto = MerchantMapper.toDto(record)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    login = async(req: express.Request) => {
        try{
            const payload = {
                Email : req.body.Email,

            }

            const merchant = await this._MerchantRepo.findOne({where:
            {Email : payload.Email}})

            if(merchant.Password = req.body.Password){
                const token = createJwtToken(payload)
                return token
            }
            else{
                return "Invalid username or password"
            }
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    get = async() : Promise<MerchantDto[]> => {
        try{
            const Merchants = await this._MerchantRepo.find()
            const dtos = Merchants.map(Merchant => MerchantMapper.toDto(Merchant))
            return dtos
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    getById = async(id: uuid) : Promise<MerchantDto> => {
        try{
            const merchant = await this._MerchantRepo.findOne({where : {merchantId : id}})
            const dto = MerchantMapper.toDto(merchant)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    update = async(id: uuid, updateModel: MerchantDomainEntity) : Promise<MerchantDto> => {
        try{
            const merchant = await this._MerchantRepo.findOne({where : 
                {merchantId: id}})

            if(updateModel.MerchantName != null){
                merchant.MerchantName = updateModel.MerchantName;
            }
            if(updateModel.Address != null){
                merchant.Address = updateModel.Address;
            }if(updateModel.AverageRatings != null){
                merchant.AverageRatings = updateModel.AverageRatings;
            }
            if(updateModel.Url != null){
                merchant.Url = updateModel.Url;
            }
            if(updateModel.Logo != null){
                merchant.Logo = updateModel.Logo;
            }

            const record = await this._MerchantRepo.save(merchant)
            const dto = MerchantMapper.toDto(record)
            return dto
           
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    delete = async(id: uuid) : Promise<boolean> => {
        try{
            const Merchant = await this._MerchantRepo.findOne({where :{merchantId:id}})
            const result = await this._MerchantRepo.remove(Merchant)
            return result != null;
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }

}