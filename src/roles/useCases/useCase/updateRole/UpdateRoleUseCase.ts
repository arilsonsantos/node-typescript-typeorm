import {
    RolesRepository
} from "@roles/repositories/RolesRepository";
import {
    Role
} from "@roles/entities/Roles";
import {
    AppError
} from "@shared/errors/AppError";
import {
    UpdateRoleDto
} from "@roles/useCases/useCase/updateRole/UpdateRoleController"



export class UpdateRoleUseCase {

    constructor(private rolesRepository : RolesRepository) {}

    async execute(updateRoleDto: UpdateRoleDto): Promise<Role>{
        const role = await this.rolesRepository.findById(updateRoleDto.id)

        if (!role){
            throw new AppError('Role not found', 404)
        }

        const roleWithSameName = await this.rolesRepository.findByName(updateRoleDto.name)

        if (roleWithSameName){
            throw new AppError('Role name not informed or already in use')
        }

        role.name = updateRoleDto.name

        return await this.rolesRepository.update(role)


    }
}
