import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    AppError,
} from "@shared/errors/AppError"
import {
    inject,
    injectable,
} from "tsyringe"


@injectable()
export class DeleteRoleUseCase {

    constructor(@inject('RolesRepository')
                private rolesRepository : RolesRepository) {}

    async execute(id: string): Promise<void>{
        const role = await this.rolesRepository.findById(id)

        if (!role){
            throw new AppError('Role not found', 404)
        }

        await this.rolesRepository.delete(role)

    }
}
