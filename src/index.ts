
import dotenv from 'dotenv'
import Application from './app';

dotenv .config();
// const port = 3011;
(async ()=>{
  const app = Application.instance();
  app.start();
})();

