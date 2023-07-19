import "reflect-metadata"
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


export const AppDataSource = new DataSource({ 
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
    subscribers: [],
})
