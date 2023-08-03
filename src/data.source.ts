import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/product.model"
import { ProductOffer } from "./entity/product.offer.model"
import { Category } from "./entity/category.model"
import { Brand } from "./entity/brand.model"
import { Customer } from "./entity/customer.model"
import { CustomerReview } from "./entity/customer.review.model"
import { Inventory } from "./entity/inventory.model"
import { Feature } from "./entity/feature.model"
import { Merchant } from "./entity/merchant.model"
import { ProductDetails } from "./entity/product.details.model"
import { ProductImages } from "./entity/product.images.model"
import { ProductMerchant } from "./entity/product.merchants.model"
import { ProductFeatures } from "./entity/product.feature.model"
import { ProductDiscounts } from "./entity/product.discounts.model"

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