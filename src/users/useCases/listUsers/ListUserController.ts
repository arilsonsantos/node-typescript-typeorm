import {
    Request,
    Response,
} from "express"
import {
    container
} from "tsyringe"
import {
    ListUserUseCase
} from "@users/useCases/listUsers/ListUserUseCase"


export class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserUseCase = container.resolve(ListUserUseCase)

        const page = request.query.page && Number(request.query.page) > 0 ? Number(request.query.page) : 1
        const limit = request.query.limit && Number(request.query.limit) > 0 ? Number(request.query.limit) : 15

        const users = await listUserUseCase.execute({
            page: page,
            limit: limit
        })

        return response.json(users)
    }
}
