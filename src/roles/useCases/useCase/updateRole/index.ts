import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    UpdateRoleController,
} from "@roles/useCases/useCase/updateRole/UpdateRoleController"
import {
    UpdateRoleUseCase,
} from "@roles/useCases/useCase/updateRole/UpdateRoleUseCase"

const rolesRepository = RolesRepository.getInstance()
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository)

export const updateRoleController = new UpdateRoleController(updateRoleUseCase)
