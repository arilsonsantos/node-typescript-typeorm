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

    handle(request: Request, response: Response): Response {
        const roleDto: CreateRoleDto = request.body

        const role = this.createRoleUserCase.execute(roleDto)

        return response.status(201).json(role)
    }
}
