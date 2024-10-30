import { User } from "../entities/Users";
import {
    CreateUserDto,
    IUsersRepository,
    PaginateParams,
    UsersPaginateProperties,
} from "./IUsersRepository"
import {
    Repository
} from "typeorm"
import {
    dataSource
} from "@shared/db"

export class UsersRepository implements IUsersRepository {

    private repository: Repository<User>

    public constructor() {
        this.repository = dataSource.getRepository(User)
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.repository.create(createUserDto)
        return this.repository.save(user)
    }

    async update(user: User): Promise<User> {
        return await this.repository.save(user)
    }

    async delete(user: User): Promise<void> {
        await this.repository.remove(user)
    }

    async findAll(params: PaginateParams): Promise<UsersPaginateProperties> {
        const [users, count] = await this.repository
            .createQueryBuilder('r')
            .innerJoinAndSelect('r.role', 'role')
            .skip(params.skip)
            .take(params.take)
            .getManyAndCount()

        return {
            perPage: params.take,
            total: count,
            page: params.page,
            data: users
        }
    }

    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

    async findByName(name: string): Promise<User | null> {
        return await this.repository.findOneBy({name})
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.repository.findOneBy({ email })
    }

}
