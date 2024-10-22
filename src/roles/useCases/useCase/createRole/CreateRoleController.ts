import {
    Request,
    Response
} from "express";
import {
    CreateRoleUseCase
} from "@roles/useCases/useCase/createRole/CreateRoleUseCase";

export class CreateRoleController {

    constructor(private createRoleUserCase: CreateRoleUseCase) {}

    handle(request: Request, response: Response): Response {
        const  { name }  = request.body

        const role = this.createRoleUserCase.execute( { name } )

        return response.status(201).json(role)
    }
}
