

export class InputValidationError extends Error{
    
    _errorMessages = [] as string[];
    _httpErrorCode = 422

    constructor(errorMessages: string[]){
        super();
        this._errorMessages = errorMessages;
        const str = JSON.stringify(errorMessages)
        this.message = "Input Validation Errors:" + str;
    }


    public get ErrorMessages(){
        return this._errorMessages;
    }

    public get HttpErrorCode(){
        return this._httpErrorCode;
    }
}