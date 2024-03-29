import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/app-error';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    next();
  },
);

app.listen(3333, () => console.info('Server started on 3333 port!'));
