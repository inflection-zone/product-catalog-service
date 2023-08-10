import express from "express";
import bodyParser from "body-parser";
import { productOfferController } from "../controllers/product.offer.controller";
export const register = (app: express.Application) =>{
const productOfferRouter = express.Router();

const controller= new productOfferController()
productOfferRouter.get("/all", controller.get);
productOfferRouter.get("/:id",controller.getById);
productOfferRouter.post("/", controller.create);
productOfferRouter.put("/:id", controller.update);
productOfferRouter.delete("/:id", controller.del);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/productOffer",productOfferRouter)
}

// import express  from "express";
// export const ordersRouter = express.Router()
// ordersRouter.get("/", (req, res) => {
//     res.send({
//         Message:"got a get requset",
//         Url: req.baseUrl,
//         Method: req.method
//     });
//   });
//   ordersRouter.post("/", (req, res) => {
//     res.send({
//         Message: "Got a POST request",
//         Url: req.baseUrl,
//         Method: req.method
//     });
//   });
//   ordersRouter.put("/", (req, res) => {
//     res.send({
//         Message:"Got a PUT request at /user",
//         Url: req.baseUrl,
//         Method: req.method
//    });
//   });
  
//   ordersRouter.delete("/", (req, res) => {
//     res.send({
//         Message:"Got a DELETE request at /user",
//     Url: req.baseUrl,
//     Method: req.method
// });
//   });
  
//   //PATCH method handler
//   ordersRouter.patch("/", (req, res) => {
//     // Handle the PATCH request
//     res.send({
//         Message:"This is the PATCH method response",
//         Url: req.baseUrl,
//     Method: req.method
//     });
//   });
  
//   // HEAD method handler
//   ordersRouter.head("/", (req, res) => {
//     // Handle the HEAD request
//     res.send({
//         Message:"This is the HEAD method response",
//         Url: req.baseUrl,
//         Method: req.method
// });
//   });