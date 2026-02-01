import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
// import helmet from 'helmet';
import homeRoutes from './routes/homeRoutes';
import jovemRoutes from './routes/jovemRoutes';
import obreiroRoutes from './routes/obreiroRoutes';
import oficinasRoute from './routes/oficinasRoute';

import './database';

dotenv.config();

const whiteList = [
  'https://umadi-wave.jadson.cloud',
  'http://localhost:4174',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allow by CORS.'));
    }
  },
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/jovens/', jovemRoutes);
    this.app.use('/obreiros/', obreiroRoutes);
    this.app.use('/oficinas/', oficinasRoute);
  }
}

export default new App().app;
