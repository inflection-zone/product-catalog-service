import express from "express";
import {Router} from "./startup/router.js"
import { AppDataSource } from "./database/data-source";

export default class Application {

    public _app: express.Application = null;
    private _router: Router = null;


    private static _instance: Application = null;
    private constructor() {
        this._app = express();
        this._router = new Router(this._app)
    }

    public static instance():Application{
        return this._instance ||   (this._instance = new this());
    }
    start = async ()=>{
        try{
            await AppDataSource.initialize(); 
            this._router.init()
            this.listen()
             }
        catch(error) {
            console.log("error 123"+error.message)

        }
    }
    private listen = async ()=>{
        return new Promise((resolve, reject)=>{
            try{
               this._app.listen(3011, () => {
                    console.log(`App is listening on port ${3011}`)
                })

            }
            catch(error){
                console.log("error...")

            }
        })

    }
    
}

