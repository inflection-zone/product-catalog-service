import * as dotenv from 'dotenv'
import { NumericType } from 'typeorm'
// logger and stuff

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type databaseDialect = 'mysql' | 'postgresql'

export interface DatabaseConfig{

    host     : string;

    username : string;

    password : string;   

    port     : number;

    dialect  : databaseDialect;

    pool     : {       //enquire purpose
        max      : 20;
        min      : 0;
        acquired : 30000;
        idle     : 10000;
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (typeof process.env.NODE_ENV === 'undefined'){
    dotenv.config();
}

if (process.env.NODE_ENV === 'test'){

    // logger required

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Config : DatabaseConfig = {
    host     : 'test',//process.env.DB_host,
    username : 'test',//process.env.DB_username,
    password : 'test',//process.env.DB_password,
    port     : 3306,//parseInt(process.env.DB_port),
    dialect  : 'mysql',//process.env.DB_dialect,
    pool     :{
        max      : 20,
        min      : 0,
        acquired : 30000,
        idle     : 10000,
    }

}


