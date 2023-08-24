
import { register as registerFeatureRoutes } from "../routes/feature.route";
import { register as registerProductfeature } from "../routes/product.feature.route";
import { register as registerProductdetails } from "../routes/product.details.route";
import express from "express";
export class Router {
    private_app : express.Application;
    _app: express.Application;
    
    constructor(app: express.Application) {
        this._app = app;
    }
    public init = async (): Promise<boolean> =>{
        return new Promise((resolve, reject) => {
            try{
                console.log("initializing the routes")
                this._app.get("/api/v1",(req:express.Request, res:express.Response)=>{
                    res.send({message:'catalog api service'})
                });
                
                registerFeatureRoutes(this._app);
               registerProductfeature(this._app);
                registerProductdetails(this._app);
            } catch (error) {
            console.log("error initializing the routes")}
        });
    };
}


              