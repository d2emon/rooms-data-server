import express from 'express';
import config from './config';
import indexRouter from './routes';
import roomsRouter from './routes/rooms';
import zonesRouter from './routes/zones';

const app = express();

const port = config.port;

app.use('/', indexRouter);
app.use('/rooms', roomsRouter);
app.use('/zones', zonesRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});
