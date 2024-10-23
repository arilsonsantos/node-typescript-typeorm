import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    Role,
} from "@roles/entities/Roles"
import {
    AppError,
} from "@shared/errors/AppError"
import {
    UpdateRoleDto,
} from "@roles/useCases/useCase/updateRole/UpdateRoleController"
import {
    inject,
    injectable,
} from "tsyringe"
import {
    IRolesRepository,
} from "@roles/repositories/IRolesRepository"


@injectable()
export class UpdateRoleUseCase {

    constructor(@inject('RolesRepository')
                private rolesRepository : IRolesRepository) {}

    async execute(updateRoleDto: UpdateRoleDto): Promise<Role>{
        const role = await this.rolesRepository.findById(updateRoleDto.id)

        if (!role){
            throw new AppError('Role not found', 404)
        }

        const roleWithSameName = await this.rolesRepository.findByName(updateRoleDto.name)

        if (roleWithSameName && role.name !== roleWithSameName.name){
            throw new AppError('Role name not informed or already in use')
        }

        role.name = updateRoleDto.name

        return await this.rolesRepository.update(role)


    }
}
