import { DataSource } from "typeorm";
import {
    CreateRolesTable1729598710749
} from "@shared/db/migrations/1729598710749-CreateRolesTable";
import {
    Role
} from "@roles/entities/Roles"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role],
    migrations: [
        CreateRolesTable1729598710749
    ]
})
