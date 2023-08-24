import "reflect-metadata"
import { DataSource } from "typeorm"
import { Feature } from "./models/feature.model"
import { ProductDetails } from "./models/product.details.model"
import { ProductFeatures } from "./models/product.feature.model"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "db1",
    synchronize: true,
    logging: true,
    entities: [ Feature,ProductDetails, 
        ProductFeatures],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})