import 'dotenv/config'
import 'reflect-metadata'
import express, {
    Request, Response, NextFunction
} from "express";
import 'express-async-errors'
import cors from 'cors'
import * as process from "node:process";
import { routes } from "./routes";
import { AppError } from "@shared/errors/AppError";
import * as console
    from "node:console";
import swaggerFile from '../../swagger.json'
import swaggerUi from 'swagger-ui-express'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }
    console.log(error)

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })

})

app.listen(process.env.PORT, ()=> {
    console.log(`Server started on port ${process.env.PORT}.`)
})
