import express from "express";
import bodyParser from "body-parser";
import { productDetailsController } from "../controller/product.details.controller"; // Import the appropriate controller
export const register = (app: express.Application) => {
  const productDetailsRouter = express.Router(); 

  const controller = new productDetailsController(); 
  productDetailsRouter.get("/all", controller.get);
  productDetailsRouter.get("/:id", controller.getById);
  productDetailsRouter.post("/", controller.create);
  productDetailsRouter.put("/:id", controller.update);
  productDetailsRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/productDetails", productDetailsRouter); 
};