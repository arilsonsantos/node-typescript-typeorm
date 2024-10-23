import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    DeleteRoleUseCase,
} from "@roles/useCases/useCase/deleteRole/DeleteRoleUseCase"
import {
    DeleteRoleController,
} from "@roles/useCases/useCase/deleteRole/DeleteRoleController"

const rolesRepository = RolesRepository.getInstance()
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository)

export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)
