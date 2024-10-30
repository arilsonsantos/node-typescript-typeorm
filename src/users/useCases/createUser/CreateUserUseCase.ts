import {
    inject,
    injectable,
} from "tsyringe"
import {
    IUsersRepository,
} from "../../repositories/IUsersRepository"
import {
    User,
} from "../../entities/Users"
import {
    AppError,
} from "@shared/errors/AppError"
import {
    IRolesRepository,
} from "@roles/repositories/IRolesRepository"

export type CreateUserDto = {
    name: string
    email: string
    password: string
    isAdmin?: boolean
    roleId: string
}

@injectable()
export class CreateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('RolesRepository')
        private rolesRepository: IRolesRepository) {
    }

    async execute({name, email, password, isAdmin, roleId}: CreateUserDto): Promise<User> {
        const emailExists = await this.usersRepository.findByEmail(email)

        if (emailExists) {
            throw new AppError('Email address already exists')
        }

        const role = await this.rolesRepository.findById(roleId)

        if (!role) {
            throw new AppError('Role not found', 404)
        }

        return  await this.usersRepository.create({
            name,
            email,
            password,
            isAdmin,
            role
        })

    }

}
