import { CustomerDomainEntity } from "../../domain.types/customer/customer.domain.entity";
import { CustomerDto } from "../../domain.types/customer/customer.dto";
import { ICustomerRepo } from "../repository.interface/customer.repo.interface";
import {Source} from '../database.connector.typeorm'
import { Customer } from "../models/customer";
import { CustomerMapper } from "../mappers/customer.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";

export class CustomerRepo implements ICustomerRepo {

    private _customerRepo = Source.getRepository(Customer)


    create = async(model: CustomerDomainEntity) : Promise<CustomerDto> => {
        try{
            const entity = {
                customerName : model.customerName,
                customerTaxNumber : model.customerTaxNumber,
                phone : model.phone,
                email : model.email,
                profileImage : model.profileImage
            }
    
            const customer = await this._customerRepo.create(entity)
            const record = await this._customerRepo.save(customer)
            const dto = CustomerMapper.toDto(record)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    get = async() : Promise<CustomerDto[]> => {
        try{
            const customers = await this._customerRepo.find()
            const dtos = customers.map(customer => CustomerMapper.toDto(customer))
            return dtos
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    getById = async(id: uuid) : Promise<CustomerDto> => {
        try{
            const customer = await this._customerRepo.findOne({where : 
                {id: id}
            })
            const dto = CustomerMapper.toDto(customer)
            return dto
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    update = async(id: uuid, updateModel: CustomerDomainEntity) : Promise<CustomerDto> => {
        try{
            const customer = await this._customerRepo.findOne({where : 
                {id: id}})

            if(updateModel.customerName != null){
                customer.customerName = updateModel.customerName;
            }
            if(updateModel.customerTaxNumber != null){
                customer.customerTaxNumber = updateModel.customerTaxNumber;
            }if(updateModel.phone != null){
                customer.phone = updateModel.phone;
            }
            if(updateModel.email != null){
                customer.email = updateModel.email;
            }
            if(updateModel.profileImage != null){
                customer.profileImage = updateModel.profileImage;
            }

            const record = await this._customerRepo.save(customer)
            const dto = CustomerMapper.toDto(record)
            return dto
           
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }


    delete = async(id: uuid) : Promise<boolean> => {
        try{
            const customer = await this._customerRepo.findOne({where :{id:id}})
            const result = await this._customerRepo.remove(customer)
            return result != null;
        }catch(error){
            throw new ApiError(500, error.message)
        }
    }

}