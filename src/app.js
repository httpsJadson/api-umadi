import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import homeRoutes from './routes/homeRoutes';
import jovemRoutes from './routes/jovemRoutes';
import obreiroRoutes from './routes/obreiroRoutes';
import './database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/jovens/', jovemRoutes);
    this.app.use('/obreiros/', obreiroRoutes);
  }
}

export default new App().app;
