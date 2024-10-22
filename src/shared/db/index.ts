import { DataSource } from "typeorm";
import {
    CreateRolesTable1729598710749
} from "@shared/db/migrations/1729598710749-CreateRolesTable";

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [],
    migrations: [
        CreateRolesTable1729598710749
    ]
})
