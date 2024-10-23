import { Request,  Response } from "express";
import { CreateRoleDto, CreateRoleUseCase } from "@roles/useCases/useCase/createRole/CreateRoleUseCase";
import { container } from 'tsyringe';

export class CreateRoleController {

    async handle(request: Request, response: Response): Promise<Response> {
        const createRoleUseCase = container.resolve(CreateRoleUseCase)
        const roleDto: CreateRoleDto = request.body

        const role = await createRoleUseCase.execute(roleDto)

        return response.status(201).json(role)
    }

}
