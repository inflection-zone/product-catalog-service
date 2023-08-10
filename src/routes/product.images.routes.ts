import express from "express";
import bodyParser from "body-parser";
import { productImagesController } from "../controllers/product.images.controller"; // Import the appropriate controller
export const register = (app: express.Application) => {
  const productImagesRouter = express.Router(); 

  const controller = new productImagesController(); 
  productImagesRouter.get("/all", controller.get);
  productImagesRouter.get("/:id", controller.getById);
  productImagesRouter.post("/", controller.create);
  productImagesRouter.put("/:id", controller.update);
  productImagesRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/productImages", productImagesRouter); 
};