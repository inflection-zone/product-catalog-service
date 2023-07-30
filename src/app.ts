import express from 'express'
import {Router} from './api/router'

export default class Application {
    
    public _app : express.Application;
    private static _instance: Application = null;
    private _router: Router = null;

    private constructor(){
        this._app = express();
        this._router = new Router(this._app);
    }

    public static getInstance(): Application{
        if(!this._instance){
            this._instance = new Application();
        }

        return this._instance;
    }


    start = async () => {
        try{
            this._app.use(express.json())
            this._app.use(express.urlencoded())
            this._router.init();
            this.listen();
        }catch(error){
            console.log(error);
        }
    }

    private listen = async () => {
        return new Promise((resolve, reject) =>{
            try{
                this._app.listen(5000, ()=>{
                    console.log("server running on port 5000")
                })
            }catch(error){
                console.log("app.listen threw error")
            }
        })
    }
}