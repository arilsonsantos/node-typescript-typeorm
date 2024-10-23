import {
    RolesRepository
} from "@roles/repositories/RolesRepository";
import {
    Role
} from "@roles/entities/Roles";
import {
    AppError
} from "@shared/errors/AppError";

export class ShowRoleUseCase {

    constructor(private rolesRepository : RolesRepository) {}

    async execute(id: string): Promise<Role>{
        const role = await this.rolesRepository.findById(id)

        if (!role){
            throw new AppError('Role not found', 404)
        }

        return role
    }
}
