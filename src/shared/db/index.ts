import { DataSource } from "typeorm";
import {
    CreateRolesTable1729598710749
} from "@shared/db/migrations/1729598710749-CreateRolesTable";
import {
    Role
} from "@roles/entities/Roles"
import {
    CreateUsersTable1729724909949
} from "@shared/db/migrations/1729724909949-CreateUsersTable"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role],
    migrations: [
        CreateRolesTable1729598710749,
        CreateUsersTable1729724909949
    ]
})
