import { Role } from "@roles/entities/Roles"
import { dataSource } from "@shared/db"
import { Repository } from "typeorm"
import {
    CreateRoleDto,
    IRolesRepository,
    PaginateParams,
    RolesPaginateProperties,
} from "@roles/repositories/IRolesRepository"

export class RolesRepository implements IRolesRepository{

    private repository: Repository<Role>

    public constructor() {
        this.repository = dataSource.getRepository(Role)
    }

    async create(createRoleDto: CreateRoleDto): Promise<Role> {
        const name = createRoleDto.name
        const role = this.repository.create( { name })

        return this.repository.save(role)
    }

    async update(role: Role): Promise<Role> {
        return await this.repository.save(role)
    }

    async delete(role: Role): Promise<void> {
        await this.repository.remove(role)
    }

    async findAll(params: PaginateParams): Promise<RolesPaginateProperties> {
        const [roles, count] = await this.repository
            .createQueryBuilder()
            .skip(params.skip)
            .take(params.take)
            .getManyAndCount()

       return {
           perPage: params.take,
           total: count,
           page: params.page,
           data: roles
       }
    }

    async findByName(name: string): Promise<Role | null> {
        return await this.repository.findOneBy({ name })
    }

    async findById(id: string): Promise<Role | null> {
        return await this.repository.findOneBy({ id })
    }


}
