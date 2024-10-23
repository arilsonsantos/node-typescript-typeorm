import {
    Request,
    Response,
} from "express"
import {
    DeleteRoleUseCase,
} from "@roles/useCases/useCase/deleteRole/DeleteRoleUseCase"

export class DeleteRoleController {

    constructor(private deleteRoleUserCase: DeleteRoleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        await this.deleteRoleUserCase.execute(request.params.id)

        return response.status(204).send()
    }
}
