import {
    RolesRepository
} from "@roles/repositories/RolesRepository";
import {
    ListRolesController
} from "@roles/useCases/useCase/listRoles/ListRolesController";
import {
    ListRolesUseCase
} from "@roles/useCases/useCase/listRoles/ListRolesUseCase";

const rolesRepository = RolesRepository.getInstance()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)

export const listRolesController = new ListRolesController(listRolesUseCase)
