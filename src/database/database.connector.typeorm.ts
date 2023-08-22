import "reflect-metadata"
import { DataSource } from "typeorm"

import { Customer } from "./models/customer"
import { Inventory } from "./models/inventory"
import { Merchant } from "./models/merchant"
import { ProductMerchant } from "./models/product.merchant"
import { CustomerReview } from './models/customer.review'
import { ProductDiscount } from './models/product.discount'
import { ProductImage } from './models/product.image'
import { Product } from "./models/product.model"
import { ProductOffer } from "./models/product.offer.model"
import { Brand } from "./models/brand.model"
import { Category } from "./models/category.model"


export class DatabaseConnectorTypeorm {

    static _source = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "prodCat",
        synchronize: true,
        logging: true,
        entities: [Customer, Merchant, Inventory, ProductMerchant, CustomerReview, ProductDiscount,
        ProductImage,Brand,Category,Product,ProductOffer],
        migrations: ["src/migration/**/*.ts"],
        subscribers: [],
    })

    public connect = async() => {
        DatabaseConnectorTypeorm._source.initialize()
    }

    
}


export const Source = DatabaseConnectorTypeorm._source

