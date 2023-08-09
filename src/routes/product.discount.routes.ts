import express from "express";
import bodyParser from "body-parser";
import { productDiscountsController } from "../controller/product.discounst.controller";
export const register = (app: express.Application) => {
  const productDiscountsRouter = express.Router(); 

  const controller = new productDiscountsController(); 
  productDiscountsRouter.get("/all", controller.get);
  productDiscountsRouter.get("/:id", controller.getById);
  productDiscountsRouter.post("/", controller.create);
  productDiscountsRouter.put("/:id", controller.update);
  productDiscountsRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/productDiscounts", productDiscountsRouter); 
};