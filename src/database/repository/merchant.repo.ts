import { MerchantDomainEntity } from "../../domain.types/merchant/merchant.domain.entity";
import { MerchantDto } from "../../domain.types/merchant/merchant.dto";
import { IMerchantRepo } from "../repository.interface/merchant.repo.interface";
import {Source} from '../database.connector.typeorm'
import { Merchant } from "../models/merchant";
import { MerchantMapper } from "../mappers/merchant.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";

export class MerchantRepo implements IMerchantRepo {

    private _MerchantRepo = Source.getRepository(Merchant)


    create = async(model: MerchantDomainEntity) : Promise<MerchantDto> => {
        try{
            const entity = {
                name: model.name,
                address: model.address,
                averageRatings : model.averageRatings,
                url : model.url,
                logo: model.logo
                
            }
    
            const Merchant = await this._MerchantRepo.create(entity)
            const record = await this._MerchantRepo.save(Merchant)
            const dto = MerchantMapper.toDto(record)
            return dto
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
            const merchant = await this._MerchantRepo.findOne({where : {id : id}})
            const dto = MerchantMapper.toDto(merchant)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    update = async(id: uuid, updateModel: MerchantDomainEntity) : Promise<MerchantDto> => {
        try{
            const merchant = await this._MerchantRepo.findOne({where : 
                {id: id}})

            if(updateModel.name != null){
                merchant.name = updateModel.name;
            }
            if(updateModel.address != null){
                merchant.address = updateModel.address;
            }if(updateModel.averageRatings != null){
                merchant.averageRatings = updateModel.averageRatings;
            }
            if(updateModel.url != null){
                merchant.url = updateModel.url;
            }
            if(updateModel.logo != null){
                merchant.logo = updateModel.logo;
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
            const Merchant = await this._MerchantRepo.findOne({where :{id:id}})
            const result = await this._MerchantRepo.remove(Merchant)
            return result != null;
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }

}