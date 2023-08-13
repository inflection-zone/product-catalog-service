import express from "express";
import bodyParser from "body-parser";
// import { brandController } from "../controller/brand.controller";
export const register = (app: express.Application) =>{
const productingRouter = express.Router();

// const controller= new brandController()

productingRouter.get("/all");
productingRouter.get("/:id");
productingRouter.post("/");
productingRouter.put("/:id");
productingRouter.delete("/:id");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/customer",productingRouter)
}