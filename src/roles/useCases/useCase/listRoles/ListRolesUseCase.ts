import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    RolesPaginateProperties
} from "@roles/repositories/IRolesRepository"
import {
    inject,
    injectable,
} from "tsyringe"

type ListRolesUseCaseParams = {
    page: number
    limit: number
}

@injectable()
export class ListRolesUseCase {

    constructor(@inject('RolesRepository')
                private rolesRepository: RolesRepository) {}

    async execute({ page, limit }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
        const skip = (page - 1) * limit

        return await this.rolesRepository.findAll( { page, skip, take:limit } )
    }

}
