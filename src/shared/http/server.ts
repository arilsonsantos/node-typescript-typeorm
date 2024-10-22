import 'dotenv/config'
import 'reflect-metadata'
import { app } from "@shared/http/app";
import { dataSource} from "@shared/db";

dataSource.initialize()
    .then(()=> {
        app.listen(process.env.PORT, ()=> {
            console.log(`Server started on port ${process.env.PORT}.`)
        })
    })

