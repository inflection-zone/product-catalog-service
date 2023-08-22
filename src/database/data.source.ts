import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./models/product.model"
import { ProductOffer } from "./models/product.offer.model"
import { Category } from "./models/category.model"
import { Brand } from "./models/brand.model"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db1",
    synchronize: true,
    logging: true,
    entities: [Brand , Category, Product, ProductOffer],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})