import {register as registerCategoryRoutes} from "../routes/category.routes"
import { register as registerProductOfferRoutes } from "../routes/product.offer.routes";
import { register as registerBrandRoutes } from "../routes/brand.routes";
import { register as registerProductRoutes } from "../routes/product.routes";


import express from "express"
export class Router {
    private _app: express.Application;

    constructor(app: express.Application) {
        this._app = app;
    }

    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {
                this._app.get("/api/v1", (req, res) => {
                    res.send({ message: "demo Api Service" })
                })
                registerProductRoutes(this._app);
                registerProductOfferRoutes(this._app);        
                registerCategoryRoutes(this._app);
                registerBrandRoutes(this._app);   
            } catch (error) {
                console.log("Error initializing the routes")
            }
        })
    }
}