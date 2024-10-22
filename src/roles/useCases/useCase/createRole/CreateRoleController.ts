import {
    Request,
    Response
} from "express";
import {
    CreateRoleDto,
    CreateRoleUseCase
} from "@roles/useCases/useCase/createRole/CreateRoleUseCase";

export class CreateRoleController {

    constructor(private createRoleUserCase: CreateRoleUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const roleDto: CreateRoleDto = request.body

        const role = await this.createRoleUserCase.execute(roleDto)

        return response.status(201).json(role)
    }
}
