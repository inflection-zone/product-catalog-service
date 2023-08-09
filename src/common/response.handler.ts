import express from 'express'
import { ResponseDto } from '../domain.types/miscellaneous/response.dto'
import { ApiError } from './api.error'
import { InputValidationError } from './input.validation.error'
import { HostAddress } from 'typeorm'
import { url } from 'inspector'

export class ResponseHandler {

    public static success(
        req: express.Request,
        res: express.Response,
        message: string,
        httpCode?: number,
        data?: any
    ) {
        const responseObject: ResponseDto = {
            Status: "Success",
            Message: message,
            HttpCode: httpCode,
            Data: data ?? null,
            Request: {
                Method: req ? req.method : null,
                Host: req ? req.hostname : null,
                Body: req ? req.body : null,
                Url: req ? req.originalUrl : null,
                Params: req ? req.params : null,
            }
        }

        res.status(httpCode).send(responseObject)
    }


    public static failure(req: express.Request,
        res: express.Response,
        message?: string,
        httpErrorCode?: number,
        error?: Error) {
        const msg = error ?
            error.message : message ?
                message : "An error has occurred";

        const responseObject: ResponseDto = {
            Status: "failure",
            Message: msg,
            HttpCode: httpErrorCode ? httpErrorCode : 500,
            Data: null,
            Request: {
                Method: req ? req.method : null,
                Host: req ? req.hostname : null,
                Body: req ? req.body : null,
                Url: req ? req.originalUrl : null,
                Params: req ? req.params : null,
            }
        }

        res.status(httpErrorCode).send(responseObject)
    }


    public static HandleError(req: express.Request,
        res: express.Response,
        error: Error){
            if(error instanceof ApiError){
                var err = error as ApiError
                ResponseHandler.failure(req, res, err.message, err.HttpErrorCode, error)
            }
            else if(error instanceof InputValidationError){
                const validationError = error as InputValidationError
                ResponseHandler.failure(req, res, validationError.message, validationError.HttpErrorCode, error)
            }
            else{
                ResponseHandler.failure(req, res, error.message, 400, error)
            }
        }
}