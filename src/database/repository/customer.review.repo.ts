import { CustomerReviewDomainEntity } from "../../domain.types/customer.review/customer.review.domain.entity";
import { CustomerReviewDto } from "../../domain.types/customer.review/customer.review.dto";
import { Source } from '../database.connector.typeorm'
import { CustomerReview } from "../models/customer.review";
import { CustomerReviewMapper } from "../mappers/customer.review.mapper";
import { SimpleConsoleLogger } from "typeorm";
import { uuid } from "../../domain.types/miscellaneous/system.types";
import { ApiError } from "../../common/api.error";
import express from 'express'
import { createJwtToken } from "../../auth/authenticator";
import { Customer } from "../models/customer";

export class CustomerReviewRepo {

    private _CustomerReviewRepo = Source.getRepository(CustomerReview)
    private _CustomerRepo = Source.getRepository(Customer)


    create = async (model: CustomerReviewDomainEntity): Promise<CustomerReviewDto> => {
        try {
            const entity = {
                customerReviewId: model.customerReviewId,
                productId: model.productId,
                customerId: model.customerId,
                VerifiedPurchase: model.VerifiedPurchase,
                Description: model.Description,
                Title: model.Title,
                Rating: model.Rating,
                FoundUsefulContent: model.FoundUsefulCount
            }

            const record = await this._CustomerReviewRepo.save(entity)
            const dto = CustomerReviewMapper.toDto(record)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

    login = async (req: express.Request) => {
        const payload = {
            Email: req.body.Email
        }
        const customer = await this._CustomerRepo.findOne({
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

    get = async (): Promise<CustomerReviewDto[]> => {
        try {
            const customerReviews = await this._CustomerReviewRepo.find()
            const dtos = customerReviews.map(customerReview => CustomerReviewMapper.toDto(customerReview))
            return dtos
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    getById = async (id: uuid): Promise<CustomerReviewDto> => {
        try {
            const customerReview = await this._CustomerReviewRepo.findOne({
                where:
                    { customerReviewId: id }
            })
            const dto = CustomerReviewMapper.toDto(customerReview)
            return dto
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    update = async (id: string, updateModel: CustomerReviewDomainEntity): Promise<CustomerReviewDto> => {
        try {
            const customerReview = await this._CustomerReviewRepo.findOne({
                where:
                    { customerReviewId: id }
            })

            if (updateModel.customerReviewId != null) {
                customerReview.customerReviewId = updateModel.customerReviewId;
            }
            if (updateModel.productId != null) {
                customerReview.productId = updateModel.productId;
            } if (updateModel.customerId != null) {
                customerReview.customerId = updateModel.customerId;
            }
            if (updateModel.VerifiedPurchase != null) {
                customerReview.VerifiedPurchase = updateModel.VerifiedPurchase;
            }
            if (updateModel.Title != null) {
                customerReview.Title = updateModel.Title;
            } 
            if (updateModel.Description != null) {
                customerReview.Description = updateModel.Description;
            }
            if (updateModel.Rating != null) {
                customerReview.Rating = updateModel.Rating;
            }
            if (updateModel.FoundUsefulCount != null) {
                customerReview.FoundUsefulCount = updateModel.FoundUsefulCount;
            }

            const record = await this._CustomerReviewRepo.save(customerReview)
            const dto = CustomerReviewMapper.toDto(record)
            return dto

        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }


    delete = async (id: uuid): Promise<boolean> => {
        try {
            const CustomerReview = await this._CustomerReviewRepo.findOne({
                where:
                    { customerReviewId: id }
            })
            const result = await this._CustomerReviewRepo.remove(CustomerReview)
            return result != null;
        } catch (error) {
            throw new ApiError(500, error.message)
        }
    }

}