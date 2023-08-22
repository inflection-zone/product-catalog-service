import {ApiError} from "./api.error";
export class ErrorHandler{
    static throwInputValidationError = (errorMessages: any[]) =>{
        var message = "Validation error has occured!";
        if(errorMessages){
            message = message + ' ' + Array.isArray(errorMessages) ? errorMessages.join(''): errorMessages.toString();
            message = message.split('"').join('');
        }
        throw new ApiError(422, message);
    }
    static throwDuplicateUserError =(message: any) =>{
        throw new ApiError(422, message);
    }
    static throwNotFoundError = (message: any) =>{
        throw new ApiError(404, message);
    }
    static throwUnauthorizedUserError = (message: any) =>{
        throw new ApiError(401, message);
    }
    static throwForebiddenAccessError = (message:any) => {
        throw new ApiError(403, message);
    }

    static throwDbAccessError = (message:any, error:any) => {
        throw new ApiError(503 , message);
    }

    static throwConflictError = (message:any) => {
        throw new ApiError( 409, message);
    }

    static throwFailedPreconditionError = (message:any) => {
        throw new ApiError(412, message);
    }

    static throwInternalServerError = (message:any, error:any) => {
        throw new ApiError(500, message);
    }

    static handleValidationError = (error: any) =>{
        if(error.isJoi === true){
            const errorMessages = error.details.map((x:any) => x.message);
            ErrorHandler.throwInputValidationError(errorMessages);
        }
        else{
            ErrorHandler.throwInputValidationError(error.message);
        }
    }
    
}