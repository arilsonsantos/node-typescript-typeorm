import 'dotenv/config'
import 'reflect-metadata'
import { app } from "@shared/http/app";
import { dataSource} from "@shared/db";

const startTime = Date.now()

dataSource.initialize()
    .then(() => {
        app.listen(process.env.PORT, () => {
            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
            console.log(`Server started on port ${process.env.PORT}.`);
            console.log(`Startup time: ${elapsedTime} ms`);
        });
    })
    .catch(error => {
        console.error("Error starting the server:", error);
    });

