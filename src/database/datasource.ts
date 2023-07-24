import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./models/product"
import { ProductOffer } from "./models/product.offer"
import { Category } from "./models/category"
import { Brand } from "./models/brand"
import { Customer } from "./models/customer"
import { CustomerReview } from "./models/customer.review"
import { Inventory } from "./models/inventory"
import { Feature } from "./models/feature"
import { Merchant } from "./models/merchant"
import { ProductDetails } from "./models/product.details"
import { ProductImages } from "./models/product.images"
import { ProductMerchant } from "./models/product.merchants"
import { ProductFeatures } from "./models/product.features"
import { ProductDiscounts } from "./models/product.discounts"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "prodCat",
    synchronize: true,
    logging: true,
    entities: [Brand , Category, Product, ProductOffer,Customer, CustomerReview,
        Inventory,Feature,Merchant,ProductDetails, ProductImages, ProductMerchant,
        ProductFeatures, ProductDiscounts],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
