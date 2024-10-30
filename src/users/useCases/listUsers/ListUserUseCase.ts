import {
    inject,
    injectable,
} from "tsyringe"
import {
    IUsersRepository,
    UsersPaginateProperties,
} from "@users/repositories/IUsersRepository"

type ListUsersUseCaseParams = {
    page: number
    limit: number
}

@injectable()
export class ListUserUseCase {
    constructor(@inject('UsersRepository')
                    private usersRepository: IUsersRepository) {
    }

    async execute({ page, limit } : ListUsersUseCaseParams): Promise<UsersPaginateProperties> {
        const skip = (page - 1) * limit;
        return await this.usersRepository.findAll({ page, skip, take: limit });
    }
}
