import {
    RolesRepository
} from "@roles/repositories/RolesRepository";

import {
    CreateRoleController
} from "@roles/useCases/useCase/createRole/CreateRoleController";
import {
    CreateRoleUseCase
} from "@roles/useCases/useCase/createRole/CreateRoleUseCase";

const rolesRepository = new RolesRepository()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)

export const createRoleController = new CreateRoleController(createRoleUseCase)
