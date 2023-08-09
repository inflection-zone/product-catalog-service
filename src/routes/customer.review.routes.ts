import express from "express";
import bodyParser from "body-parser";
import { customerReviewController } from "../controller/customer.review.controller"; // Import the appropriate controller
export const register = (app: express.Application) => {
  const customerReviewRouter = express.Router(); 

  const controller = new customerReviewController(); 
  customerReviewRouter.get("/all", controller.get);
  customerReviewRouter.get("/:id", controller.getById);
  customerReviewRouter.post("/", controller.create);
  customerReviewRouter.put("/:id", controller.update);
  customerReviewRouter.delete("/:id", controller.del);
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/v1/customerReview", customerReviewRouter); 
};