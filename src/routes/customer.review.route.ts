import express from "express";
import bodyParser from "body-parser";
// import { brandController } from "../controller/brand.controller";
export const register = (app: express.Application) =>{
const customerRouter = express.Router();

// const controller= new brandController()

customerRouter.get("/all");
customerRouter.get("/:id");
customerRouter.post("/");
customerRouter.put("/:id");
customerRouter.delete("/:id");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/customer",customerRouter)
}