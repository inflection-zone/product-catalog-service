export class ApiError extends Error{
    
    _errorMessage = "An unexpected error has occurred"
    _httpErrorCode = 500

    constructor(httpErrorCode: number, errorMessage: string){
        super();
        this._errorMessage = errorMessage;
        this._httpErrorCode = httpErrorCode;
        this.message = errorMessage;
    }


    public get ErrorMessage(){
        return this._errorMessage;
    }

    public get HttpErrorCode(){
        return this._httpErrorCode;
    }
}