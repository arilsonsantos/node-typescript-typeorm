import {
    Request,
    Response,
} from "express"
import {
    UpdateRoleUseCase,
} from "@roles/useCases/useCase/updateRole/UpdateRoleUseCase"
import {
    container,
} from "tsyringe"

export type UpdateRoleDto = {
    id: string,
    name: string
}

export class UpdateRoleController {

    async handle(request: Request, response: Response): Promise<Response> {
        const updateRoleUserCase = container.resolve(UpdateRoleUseCase)
        const id = request.params.id
        const roleDto: UpdateRoleDto = request.body

        const roleToUpdate = {
            id,
            name: roleDto.name
        }

        const role = await updateRoleUserCase.execute(roleToUpdate)

        return response.json(role)
    }

}
