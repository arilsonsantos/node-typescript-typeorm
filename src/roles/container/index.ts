import { container } from 'tsyringe';
import {
    RolesRepository
} from "@roles/repositories/RolesRepository"
import {
    IRolesRepository
} from "@roles/repositories/IRolesRepository"
import {
    CreateRoleController
} from "@roles/useCases/useCase/createRole/CreateRoleController"
import {
    UpdateRoleController
} from "@roles/useCases/useCase/updateRole/UpdateRoleController"
import {
    ListRolesController
} from "@roles/useCases/useCase/listRoles/ListRolesController"
import {
    ShowRoleController
} from "@roles/useCases/useCase/showRole/ShowRoleController"
import {
    DeleteRoleController
} from "@roles/useCases/useCase/deleteRole/DeleteRoleController"

container.registerSingleton<IRolesRepository>('RolesRepository', RolesRepository)

container.registerSingleton('CreateRoleController', CreateRoleController)
container.registerSingleton('UpdateRoleController', UpdateRoleController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('ShowRoleController', ShowRoleController)
container.registerSingleton('DeleteRoleController', DeleteRoleController)
