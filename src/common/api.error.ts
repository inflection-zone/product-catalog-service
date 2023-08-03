export class ApiError extends Error{
    
    Trace: any = null;
    Code = 500;
    
    constructor(message: any, errorCode: any, error: any = null){
        super();
        console.log(`Message = ${message} Error code = ${errorCode}`)
        this.message = message ?? 'An unexpected error has occured.';
        this.Trace = error != null ? error.stack : '';
        this.Code = errorCode ?? 500;
    }
}