import {
    Role
} from "@roles/entities/Roles";

type CreateRoleDto = {
    name: string
}

export class RolesRepository {

    private roles: Role[]

    constructor() {
        this.roles = []
    }

    create(createRoleDto: CreateRoleDto): Role {
        const role = new Role()
        role.name = createRoleDto.name

        this.roles.push(role)

        return role
    }

    findAll(): Role[] {
       return this.roles
    }
}
