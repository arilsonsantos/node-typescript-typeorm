import {
    container,
} from "tsyringe"
import {
    Router,
} from "express"
import {
    CreateUserController,
} from "@users/useCases/createUser/CreateUserController"
import {
    ListUserController
} from "@users/useCases/listUsers/ListUserController"
import {
    celebrate,
    Joi,
    Segments,
} from "celebrate"


const usersRouter = Router()

const createController = container.resolve(CreateUserController)
const listController = container.resolve(ListUserController)

usersRouter.post("/", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        // password: Joi.string().required,
        isAdmin: Joi.boolean().required(),
        roleId: Joi.string().uuid().required()

    })
}), (request, response) => {
    return createController.handle(request, response)
})

usersRouter.get("/", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Number,
        limit: Number
    })
    }),
    (request, response) => {
    return listController.handle(request, response)
})

export { usersRouter }
