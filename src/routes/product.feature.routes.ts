import express from "express";
import bodyParser from "body-parser";
import { productFeatureController } from "../controller/product.feature.controller";
export const register = (app: express.Application) => {
  const productFeatureRouter = express.Router(); 

  const controller = new productFeatureController(); 
  productFeatureRouter.get("/all", controller.get);
  productFeatureRouter.get("/:id", controller.getById);
  productFeatureRouter.post("/", controller.create);
  productFeatureRouter.put("/:id", controller.update);
  productFeatureRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/productFeature", productFeatureRouter); 
};