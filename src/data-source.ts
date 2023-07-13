import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customer } from "./entity/Customer"
import {Merchant} from "./entity/Merchant"
import {ProductMerchant} from "./entity/ProductMerchant"
import {Inventory} from "./entity/Inventory"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3030,
    username: "root",
    password: "Muffinbabu@160304",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Customer, Merchant, ProductMerchant, Inventory],
    migrations: [],
    subscribers: [],
})
