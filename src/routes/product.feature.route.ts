

import express from "express";
import bodyParser from "body-parser";
// import { FeatureController } from "../controller/feature.controller";
import { ProductFeatureController } from "../controller/product.feature.controller";

export const register = (app:express.Application)=>{
const ProductfeatureRouter= express.Router();

const controller = new ProductFeatureController();


  ProductfeatureRouter.get("/all", controller.get); 
  ProductfeatureRouter.get("/:id", controller.getById);
  ProductfeatureRouter.post("/",controller.create );
  ProductfeatureRouter.put("/:id", controller.update);
  ProductfeatureRouter.delete("/:id", controller.del);
  app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
  app.use("/api/v1/productfeature", ProductfeatureRouter)
}


 