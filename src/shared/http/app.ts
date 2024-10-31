import 'reflect-metadata'; // Necessário para TypeGraphQL
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { routes } from './routes';
import { AppError } from '@shared/errors/AppError';
import swaggerFile from '../../swagger.json';
import swaggerUi from 'swagger-ui-express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from '../resolvers/HelloResolver';
import { UserResolver } from '../resolvers/UserResolver';
import { dataSource } from '@shared/db';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(errors());

async function startApolloServer() {
    await dataSource.initialize();
    console.log("Data Source inicializado com sucesso!");
    const schema = await buildSchema({
        resolvers: [HelloResolver, UserResolver],
    });

    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
}

startApolloServer().catch((error) => console.error('Erro ao iniciar o Apollo Server:', error));

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    console.log(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

export { app };
