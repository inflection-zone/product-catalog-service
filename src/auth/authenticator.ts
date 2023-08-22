import jwt from 'jsonwebtoken'
import {ResponseHandler} from '../common/response.handler'

export function createJwtToken(payload: any){
    return jwt.sign(payload, "SecretKey", {expiresIn:"30m"});
}

export async function verifyJwtToken(token){
    return jwt.verify(token, "SecretKey");
}

export async function authorize(req, res, next){

    const authHeader = req.headers.authorization;
    if(authHeader!== undefined){
        const bearerToken = authHeader.split(" ");
        const token = bearerToken[1];

        try{
            const payload = await verifyJwtToken(token);
            console.log(payload);
            req.payload = payload;
            next();
        }catch(error){
            ResponseHandler.HandleError(req, res, error)
        }
    }
    else{
        ResponseHandler.failure(req, res, "Unauthorized Access", 401)
    }
}