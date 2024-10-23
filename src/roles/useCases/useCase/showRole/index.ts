import {
    RolesRepository,
} from "@roles/repositories/RolesRepository"
import {
    ShowRoleController,
} from "@roles/useCases/useCase/showRole/ShowRoleController"
import {
    ShowRoleUseCase,
} from "@roles/useCases/useCase/showRole/ShowRoleUseCase"

const rolesRepository = RolesRepository.getInstance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)

export const showRoleController = new ShowRoleController(showRoleUseCase)
