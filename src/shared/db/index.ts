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
import {
    AddRoleIdToUsersTable1729725285385
} from "@shared/db/migrations/1729725285385-AddRoleIdToUsersTable"
import {
    User
} from "../../users/entities/Users"

export const dataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    entities: [Role, User],
    migrations: [
        CreateRolesTable1729598710749,
        CreateUsersTable1729724909949,
        AddRoleIdToUsersTable1729725285385
    ]
})
