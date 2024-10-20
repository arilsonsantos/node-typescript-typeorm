import { Router, Request, Response } from 'express';
import {
    AppError
} from "@shared/errors/AppError";

const routes = Router();

routes.get('/',  (request, response): Response => {
    throw new AppError('Acesso Negado.', 401)
    return response.json({ message: 'Olá Dev!' });
});

export { routes };
