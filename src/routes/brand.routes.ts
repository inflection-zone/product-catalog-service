import express from "express";
import bodyParser from "body-parser";
import { brandController } from "../controller/brand.controller";
export const register = (app: express.Application) =>{
const brandRouter = express.Router();

const controller= new brandController()
brandRouter.get("/all", controller.get);
brandRouter.get("/:id", controller.getById);
brandRouter.post("/", controller.create);
brandRouter.put("/:id", controller.update);
brandRouter.delete("/:id", controller.del);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/brand",brandRouter)
}





