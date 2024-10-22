import {
    Role
} from "@roles/entities/Roles";

type CreateRoleDto = {
    name: string
}

export class RolesRepository {

    private roles: Role[]
    private static INSTANCE: RolesRepository

    private constructor() {
        this.roles = []
    }

    public static getInstance(): RolesRepository {
        if (!RolesRepository.INSTANCE){
            RolesRepository.INSTANCE = new RolesRepository()
        }

        return RolesRepository.INSTANCE
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

    findByName(name: string): Role | undefined {
        return this.roles.find(r => r.name === name)
    }
}
