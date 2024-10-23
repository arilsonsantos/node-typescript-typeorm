import {
    Router
} from "express"
import {
    listRolesController
} from "@roles/useCases/useCase/listRoles";
import {
    createRoleController
} from "@roles/useCases/useCase/createRole";
import {
    showRoleController
} from "@roles/useCases/useCase/showRole"

const rolesRouter = Router()

rolesRouter.post("/", (request, response) => {
    return createRoleController.handle(request, response)
})

rolesRouter.get("/", (request, response) => {
   return listRolesController.handle(request, response)
})

rolesRouter.get("/:id", (request, response) => {
    return showRoleController.handle(request, response)
})

export { rolesRouter }


