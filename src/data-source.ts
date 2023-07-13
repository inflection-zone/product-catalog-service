import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/customer"
import {Product} from "./entity/product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Customer, Product],
    migrations: [],
    subscribers: [],
})
