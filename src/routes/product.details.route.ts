import express from "express";
import bodyParser from "body-parser";
import { ProductDetailsController } from "../controller/product.details.controller";

export const register = (app:express.Application)=>{
const ProductdetailsRouter= express.Router();

const controller = new ProductDetailsController();

  ProductdetailsRouter.get("/all", controller.get); 
  ProductdetailsRouter.get("/:id", controller.getById);
  ProductdetailsRouter.post("/", controller.create);
  ProductdetailsRouter.put("/:id", controller.update);
  ProductdetailsRouter.delete("/:id", controller.del);
  app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
  app.use("/api/v1/productdetails", ProductdetailsRouter)
}
  