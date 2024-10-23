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
    inject,
    injectable,
} from "tsyringe"
import {
    IRolesRepository
} from "@roles/repositories/IRolesRepository"

export type CreateRoleDto = {
    name: string
}

@injectable()
export class CreateRoleUseCase {

    constructor(@inject('RolesRepository')
                private rolesRepository : IRolesRepository) {}

    async execute({ name }: CreateRoleDto): Promise<Role>{
        const roleExists = await this.rolesRepository.findByName(name)

        if (roleExists){
            throw new AppError('Role already exists')
        }

        return this.rolesRepository.create( { name } )
    }
}
