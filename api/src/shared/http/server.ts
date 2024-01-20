import 'reflect-metadata';
import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/app-error';
import databaseConnection from '@shared/db/connection';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Interval server error',
  });
});

app.listen(3333, () => {
  databaseConnection.initialize();
  console.info('Server started on 3333 port!');
});
