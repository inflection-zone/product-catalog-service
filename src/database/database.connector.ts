import "reflect-metadata"
import { Config } from "./database.config"
import * as path from 'path'
import { DataSource } from "typeorm"
import { Customer } from "./models/customer"
import {Merchant} from "./models/merchant"
import {ProductMerchant} from "./models/product.merchants"
import {Inventory} from "./models/inventory"
import {Feature} from "./models/feature"
import { ProductFeatures } from "./models/product.features"
import {ProductDiscounts} from "./models/product.discounts"
import {CustomerReview} from "./models/customer.review"
import {ProductImages} from "./models/product.images"
import {Category} from "./models/category"
import { Product } from "./models/product"
import {Brand} from "./models/brand"
import {ProductOffer} from "./models/product.offer"
import {ProductDetails} from "./models/product.details"
import { rejects } from "assert"

//logger import + engine imports (?)

//////////////////////////////////////////////////////////////////////////////////////////////////////

      //logger config

//////////////////////////////////////////////////////////////////////////////////////////////////////
class DatabaseConnector{

    static _basePath = path.join(process.cwd(), 'src/database/models').replace(/\\/g, '/')

    static _dataSource = new DataSource({ 
        // option to save as env variables
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "roots",
        database: "mydb",
        synchronize: true,
        logging: false,
        entities: [Customer, Merchant, ProductMerchant, Inventory, Feature, ProductFeatures, 
            Product, CustomerReview, ProductImages, Category, Brand, ProductOffer,
        ProductDetails],
        migrations: [],
        subscribers: []

        //logger, poolsize, caching
    })





    //method for getting files recursively






    static _initialize = () : Promise<boolean> => {
        return new Promise((resolve, reject) => {
            
            this
            ._dataSource
            .initialize()
            .then(()=>{
                console.log("datasource initialized")
                resolve(true)
            })

            .catch(error => {
                console.log("error initializing datasource")
                reject(false)
            })
        })
    }
}
