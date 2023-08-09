import express from "express";
import bodyParser from "body-parser";
import { featureController } from "../controller/feature.controller"; 

export const register = (app: express.Application) => {
  const featureRouter = express.Router(); 

  const controller = new featureController(); 

  featureRouter.get("/all", controller.get); 
  featureRouter.get("/:id", controller.getById);
  featureRouter.post("/", controller.create);
  featureRouter.put("/:id", controller.update);
  featureRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/feature", featureRouter); 
};