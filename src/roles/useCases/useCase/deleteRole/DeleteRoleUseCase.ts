import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    AppError,
} from "@shared/errors/AppError"


export class DeleteRoleUseCase {

    constructor(private rolesRepository : RolesRepository) {}

    async execute(id: string): Promise<void>{
        const role = await this.rolesRepository.findById(id)

        if (!role){
            throw new AppError('Role not found', 404)
        }

        await this.rolesRepository.delete(role)

    }
}
