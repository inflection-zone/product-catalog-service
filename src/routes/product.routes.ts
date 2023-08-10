import express from "express";
import { productController } from "../controllers/product.controller";
import bodyParser from "body-parser";

export const register = (app: express.Application) =>{
const productRouter = express.Router();
const controller = new productController()
productRouter.get("/all", controller.get);
productRouter.get("/:id", controller.getById);
productRouter.post("/", controller.create);
productRouter.put("/:id", controller.update);
productRouter.delete("/:id", controller.del);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/product",productRouter)
}
