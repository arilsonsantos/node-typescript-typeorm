import {
    Request,
    Response,
} from "express"
import {
    ShowRoleUseCase,
} from "@roles/useCases/useCase/showRole/ShowRoleUseCase"
import { container } from "tsyringe"

export class ShowRoleController {

    async handle(request: Request, response: Response): Promise<Response> {
        const showRoleUserCase = container.resolve(ShowRoleUseCase)
        const id = request.params.id
        const role = await showRoleUserCase.execute(id)

        return response.json(role)
    }
}
