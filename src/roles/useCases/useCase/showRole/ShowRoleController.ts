import {
    Request,
    Response,
} from "express"
import {
    ShowRoleUseCase,
} from "@roles/useCases/useCase/showRole/ShowRoleUseCase"

export class ShowRoleController {

    constructor(private showRoleUserCase: ShowRoleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.params.id
        const role = await this.showRoleUserCase.execute(id)

        return response.json(role)
    }
}
