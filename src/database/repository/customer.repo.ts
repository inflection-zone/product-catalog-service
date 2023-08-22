import { CustomerDomainEntity } from "../../domain.types/customer/customer.domain.entity";
import { CustomerDto } from "../../domain.types/customer/customer.dto";
import { ICustomerRepo } from "../repository.interface/customer.repo.interface";
import { Source } from '../database.connector.typeorm'
import { Customer } from "../models/customer";
import { CustomerMapper } from "../mappers/customer.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { createJwtToken } from "../../auth/authenticator";

export class CustomerRepo implements ICustomerRepo {

    private _customerRepo = Source.getRepository(Customer)


    create = async (model: CustomerDomainEntity): Promise<CustomerDto> => {
        try {
            const entity = {
                CustomerId: model.customerId,
                CustomerName: model.CustomerName,
                CustomerTaxNumber: model.CustomerTaxNumber,
                Phone: model.Phone,
                Email: model.Email,
                ProfileImage: model.ProfileImage,
                Password: model.Password
            }

            const customer = await this._customerRepo.create(entity)
            const record = await this._customerRepo.save(customer)
            const dto = CustomerMapper.toDto(record)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

    login = async (req: express.Request) => {
        const payload = {
            Email: req.body.Email
        }
        const customer = await this._customerRepo.findOne({
            where: {
                Email: payload.Email
            }
        })

        if (customer.Password === req.body.Password) {
            const token = createJwtToken(payload)
            return token
        }
        else {
            return "Invalid username or password"
        }
    }

    get = async (): Promise<CustomerDto[]> => {
        try {
            const customers = await this._customerRepo.find()
            const dtos = customers.map(customer => CustomerMapper.toDto(customer))
            return dtos
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    getById = async (id: uuid): Promise<CustomerDto> => {
        try {
            const customer = await this._customerRepo.findOne({
                where:
                    { customerId: id }
            })
            const dto = CustomerMapper.toDto(customer)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    update = async (id: uuid, updateModel: CustomerDomainEntity): Promise<CustomerDto> => {
        try {
            const customer = await this._customerRepo.findOne({
                where:
                    { customerId: id }
            })

            if (updateModel.CustomerName != null) {
                customer.CustomerName = updateModel.CustomerName;
            }
            if (updateModel.CustomerTaxNumber != null) {
                customer.CustomerTaxNumber = updateModel.CustomerTaxNumber;
            } if (updateModel.Phone != null) {
                customer.Phone = updateModel.Phone;
            }
            if (updateModel.Email != null) {
                customer.Email = updateModel.Email;
            }
            if (updateModel.ProfileImage != null) {
                customer.ProfileImage = updateModel.ProfileImage;
            }

            const record = await this._customerRepo.save(customer)
            const dto = CustomerMapper.toDto(record)
            return dto

        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    delete = async (id: uuid): Promise<boolean> => {
        try {
            const customer = await this._customerRepo.findOne({
                where:
                    { customerId: id }
            })
            const result = await this._customerRepo.remove(customer)
            return result != null;
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

}