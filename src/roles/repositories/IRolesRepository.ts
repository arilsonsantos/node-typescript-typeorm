import {
    Role
} from "@roles/entities/Roles"

export type CreateRoleDto = {
    name: string
}

export type PaginateParams = {
    page: number
    skip: number
    take: number
}

export type RolesPaginateProperties = {
    data: Role[]
    total: number
    page: number
    perPage: number
}


export interface IRolesRepository {
    create(createRoleDto: CreateRoleDto): Promise<Role>
    update(role: Role): Promise<Role>
    delete(role: Role): Promise<void>
    findAll(params: PaginateParams): Promise<RolesPaginateProperties>
    findById(id: string): Promise<Role | null>
    findByName(name: string): Promise<Role | null>
}
