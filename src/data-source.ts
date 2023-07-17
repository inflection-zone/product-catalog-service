import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"
import {Merchant} from "./entity/Merchant"
import {ProductMerchant} from "./entity/ProductMerchant"
import {Inventory} from "./entity/Inventory"
import {Feature} from "./entity/Feature"
import { ProductFeatures } from "./entity/ProductFeatures"
import {ProductDiscounts} from "./entity/ProductDiscounts"
import {CustomerReview} from "./entity/CustomerReview"
import {ProductImages} from "./entity/ProductImages"
import {Category} from "./entity/Category"
import { Product } from "./entity/Product"
import {Brand} from "./entity/Brand"
import {ProductOffer} from "./entity/ProductOffer"
import {ProductDetails} from "./entity/ProductDetails"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3030,
    username: "root",
    password: "//",
    database: "//",
    synchronize: true,
    logging: false,
    entities: [Customer, Merchant, ProductMerchant, Inventory, Feature, ProductFeatures, 
        Product, CustomerReview, ProductImages, Category, Brand, ProductOffer,
    ProductDetails],
    migrations: [],
    subscribers: [],
})
