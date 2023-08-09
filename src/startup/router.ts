import {register as registerCategoryRoutes} from "../routes/category.routes"
import { register as registerProductOfferRoutes } from "../routes/product.offer.routes";
import { register as registerBrandRoutes } from "../routes/brand.routes";
import { register as registerProductRoutes } from "../routes/product.routes";
import { register as registerCustomerReviewRoutes } from "../routes/customer.review.routes";
import { register as registerFeaturesRoutes } from "../routes/feature.routes";
import { register as registerProductFeaturesRoutes } from "../routes/product.feature.routes";
import { register as registerProductDetailsRoutes } from "../routes/product.details.routes";
import { register as registerProductDiscountsRoutes } from "../routes/product.discount.routes";
import { register  as registerProductImagesRoutes} from "../routes/product.images.routes";

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
                registerProductDetailsRoutes(this._app);
                registerProductImagesRoutes(this._app);
                registerProductDiscountsRoutes(this._app);
                registerCustomerReviewRoutes(this._app);
                registerProductFeaturesRoutes(this._app);
                registerFeaturesRoutes(this._app);
                
            } catch (error) {
                console.log("Error initializing the routes")
            }
        })
    }
}