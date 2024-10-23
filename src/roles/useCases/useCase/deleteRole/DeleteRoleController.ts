import {
    Request,
    Response,
} from "express"
import {
    DeleteRoleUseCase,
} from "@roles/useCases/useCase/deleteRole/DeleteRoleUseCase"
import {
    container,
} from "tsyringe"

export class DeleteRoleController {

    async handle(request: Request, response: Response): Promise<Response> {
        const deleteRoleUseCase = container.resolve(DeleteRoleUseCase)
        await deleteRoleUseCase.execute(request.params.id)

        return response.status(204).send()
    }

}
