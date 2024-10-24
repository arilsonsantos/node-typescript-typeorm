import {
    Role
} from "@roles/entities/Roles"
import {
    User
} from "../entities/Users"
import {
    CreateRoleDto,
    RolesPaginateProperties,
} from "@roles/repositories/IRolesRepository"

export type PaginateParams = {
    page: number
    skip: number
    take: number
}

export type UsersPaginateProperties = {
    data: User[]
    total: number
    page: number
    perPage: number
}

export type CreateUserDto = {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    role: Role
}

export interface IUsersRepository {
    create(createUserDto: CreateUserDto): Promise<Role>
    update(user: User): Promise<User>
    delete(user: User): Promise<void>
    findAll(params: PaginateParams): Promise<UsersPaginateProperties>
    findById(id: string): Promise<User | null>
    findByName(name: string): Promise<User | null>
}
