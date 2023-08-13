import express from "express";
import bodyParser from "body-parser";
// import { brandController } from "../controller/brand.controller";
export const register = (app: express.Application) =>{
const productdiscountRouter = express.Router();

// const controller= new brandController()

productdiscountRouter.get("/all");
productdiscountRouter.get("/:id");
productdiscountRouter.post("/");
productdiscountRouter.put("/:id");
productdiscountRouter.delete("/:id");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/productdiscount",productdiscountRouter)
}