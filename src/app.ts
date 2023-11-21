import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// import config from './config'; //
import * as middlewares from './middlewares';
// import MessageResponse from './interfaces/MessageResponse';

// import api from './api';
import indexRouter from './routes';
import roomsRouter from './routes/rooms';
import zonesRouter from './routes/zones';

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

/*
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});
*/

app.use('/', indexRouter);
app.use('/rooms', roomsRouter);
app.use('/zones', zonesRouter);
// app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
