import { container } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserUseCase"
import {
    Request,
    Response,
} from "express"

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const userDto = request.body;
        const user = await createUserUseCase.execute(userDto);
        return response.status(201).json(user);
    }
}
