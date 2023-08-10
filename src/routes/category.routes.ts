import express from "express";
import { categoryController } from "../controllers/category.controller";
import bodyParser from "body-parser";

export const register = (app: express.Application) =>{
const categoryRouter = express.Router();


const controller = new categoryController()
categoryRouter.get("/all",controller.get);
categoryRouter.get("/:id",controller.getById);
categoryRouter.post("/",controller.create);
categoryRouter.put("/:id", controller.update);
categoryRouter.delete("/:id", controller.del);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/v1/category",categoryRouter)
}
