import express from "express";
import { ProductController } from "../controllers/product.controller";
import bodyParser from "body-parser";

export const register = (app: express.Application) =>{
const productRouter = express.Router();

const controller = new ProductController()

productRouter.get("/all", controller.get);
productRouter.post("/", controller.create);
productRouter.put("/:id", controller.update);
productRouter.delete("/:id", controller.del);
productRouter.get("/:id", controller.getById);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/product",productRouter)
}
