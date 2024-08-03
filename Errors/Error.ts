import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    message: err.message || 'Internal Server Error',
  });
};
