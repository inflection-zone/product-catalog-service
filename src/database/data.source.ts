import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./models/product.model"
import { ProductOffer } from "./models/product.offer.model"
import { ProductDetails } from "./models/product.details.model"
import { Category } from "./models/category.model"
import { Inventory } from "./models/inventory.model"
import { Merchant } from "./models/merchant.model"
import { ProductDiscounts } from "./models/product.discounts.model"
import { ProductMerchant } from "./models/product.merchants.model"
import { Brand } from "./models/brand.model"
import { Customer } from "./models/customer.model"
import { Feature } from "./models/feature.model"
import { CustomerReview } from "./models/customer.review.model"
import { ProductImages } from "./models/product.images.model"
import { ProductFeatures } from "./models/product.feature.model"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db",
    synchronize: true,
    logging: true,
    entities: [Brand , Category, Product, ProductOffer,Customer, CustomerReview,
        Inventory,Feature,Merchant,ProductDetails, ProductImages, ProductMerchant,
        ProductFeatures, ProductDiscounts],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})