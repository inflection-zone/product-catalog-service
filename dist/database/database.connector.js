"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnector = void 0;
require("reflect-metadata");
const database_config_1 = require("./database.config");
const path = __importStar(require("path"));
const typeorm_1 = require("typeorm");
const customer_1 = require("./models/customer");
const merchant_1 = require("./models/merchant");
const product_merchants_1 = require("./models/product.merchants");
const inventory_1 = require("./models/inventory");
const feature_1 = require("./models/feature");
const product_features_1 = require("./models/product.features");
const customer_review_1 = require("./models/customer.review");
const product_images_1 = require("./models/product.images");
const category_1 = require("./models/category");
const product_1 = require("./models/product");
const brand_1 = require("./models/brand");
const product_offer_1 = require("./models/product.offer");
const product_details_1 = require("./models/product.details");
//logger import + engine imports (?)
//////////////////////////////////////////////////////////////////////////////////////////////////////
//logger config
//////////////////////////////////////////////////////////////////////////////////////////////////////
class DatabaseConnector {
}
exports.DatabaseConnector = DatabaseConnector;
_a = DatabaseConnector;
DatabaseConnector._basePath = path.join(process.cwd(), 'src/database/models').replace(/\\/g, '/');
DatabaseConnector._dataSource = new typeorm_1.DataSource({
    // option to save as env variables
    type: 'mysql',
    host: database_config_1.Config.host,
    port: database_config_1.Config.port,
    username: database_config_1.Config.username,
    password: database_config_1.Config.password,
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: [customer_1.Customer, merchant_1.Merchant, product_merchants_1.ProductMerchant, inventory_1.Inventory, feature_1.Feature, product_features_1.ProductFeatures,
        product_1.Product, customer_review_1.CustomerReview, product_images_1.ProductImages, category_1.Category, brand_1.Brand, product_offer_1.ProductOffer,
        product_details_1.ProductDetails],
    migrations: [],
    subscribers: []
    //logger, poolsize, caching
});
//method for getting files recursively
DatabaseConnector._initialize = () => {
    return new Promise((resolve, reject) => {
        _a
            ._dataSource
            .initialize()
            .then(() => {
            console.log("datasource initialized");
            resolve(true);
        })
            .catch(error => {
            console.log("error initializing datasource");
            reject(false);
        });
    });
};
