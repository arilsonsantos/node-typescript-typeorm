import {
    RolesRepository
} from "@roles/repositories/RolesRepository";
import {
    Role
} from "@roles/entities/Roles";
import {
    AppError
} from "@shared/errors/AppError";

export type CreateRoleDto = {
    name: string
}

export class CreateRoleUseCase {

    constructor(private rolesRepository : RolesRepository) {}

    execute(roleDto: CreateRoleDto): Role{
        const roleExists = this.rolesRepository.findByName(roleDto.name)

        if (roleExists){
            throw new AppError('Role already exists')
        }

        return this.rolesRepository.create( roleDto )
    }
}
