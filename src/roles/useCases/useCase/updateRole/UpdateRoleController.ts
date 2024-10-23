import {
    Request,
    Response,
} from "express"
import {
    UpdateRoleUseCase,
} from "@roles/useCases/useCase/updateRole/UpdateRoleUseCase"

export type UpdateRoleDto = {
    id: string,
    name: string
}

export class UpdateRoleController {

    constructor(private updateRoleUserCase: UpdateRoleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.id
        const roleDto: UpdateRoleDto = request.body

        const roleToUpdate = {
            id,
            name: roleDto.name
        }

        const role = await this.updateRoleUserCase.execute(roleToUpdate)

        return response.json(role)
    }
}
