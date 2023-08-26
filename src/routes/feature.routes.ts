
import express from "express";
import bodyParser from "body-parser";
import { FeatureController } from "../controllers/feature.controller";

export const register = (app:express.Application)=>{
const FeatureRouter= express.Router();

const controller = new FeatureController();

   FeatureRouter.get("/all", controller.get); 
  FeatureRouter.get("/:id", controller.getById);
  FeatureRouter.post("/", controller.create);
  FeatureRouter.put("/:id", controller.update);
   FeatureRouter.delete("/:id", controller.del);
  app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
  app.use("/api/v1/feature", FeatureRouter)
}




  




  
  