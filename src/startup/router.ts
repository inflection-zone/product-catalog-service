import express from 'express'
import {register as brandRegister} from '../routes/brand.routes'
import {register as categoryRegister} from '../routes/category.routes'
import { register as customerReviewRegister} from '../routes/customer.review.routes'
import { register as customerRegister} from '../routes/customer.routes'
import { register as featureRegister} from '../routes/feature.routes'
import { register as inventoryRegister} from '../routes/inventory.routes'
import { register as merchantRegister} from '../routes/merchant.routes'
import { register as productDetailsRegister} from '../routes/product.details.routes'
import { register as productDiscountRegister} from '../routes/product.discount.routes'
import { register as productFeaturesRegister} from '../routes/product.feature.routes'
import { register as productImageRegister} from '../routes/product.image.routes'
import { register as productMerchantRegister} from '../routes/product.merchant.routes'
import { register as productOfferRegister} from '../routes/product.offer.routes'
import { register as productRegister} from '../routes/product.routes'

import Application from '../app'

export class Router {

    private _app: express.Application;

    constructor(app: express.Application) {
        this._app = app;
    }

    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {
                this._app.get('/api/v1/', (req: express.Request, res: express.Response) => {
                    res.send({
                        message: "Product Catalog Service API Version 1"
                    });

                    brandRegister(this._app);
                    categoryRegister(this._app);
                    customerReviewRegister(this._app);
                    customerRegister(this._app);
                    featureRegister(this._app);
                    inventoryRegister(this._app);
                    merchantRegister(this._app);
                    productDetailsRegister(this._app);
                    productDiscountRegister(this._app);
                    productFeaturesRegister(this._app);
                    productImageRegister(this._app);
                    productMerchantRegister(this._app);
                    productOfferRegister(this._app);
                    productRegister(this._app);
                    
                    resolve(true);

                })
            } catch (error) {
                console.log(error)
                reject(false)
            }
        })
    }
}