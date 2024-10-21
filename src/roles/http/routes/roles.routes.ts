import {
    name,
    Router
} from "express"
import {
    RolesRepository
} from "@roles/repositories/RolesRepository";
import {
    AppError
} from "@shared/errors/AppError";

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post("/", (reqquest, response) => {
    const  { name }  = reqquest.body

    const roleExists = rolesRepository.findByName(name)
    if (roleExists){
        throw new AppError('Role already exists')
    }
    const role = rolesRepository.create( { name })

    return response.status(201).json(role)

})

rolesRouter.get("/", (request, response) => {
    const roles = rolesRepository.findAll()
    return response.json(roles)
})

export { rolesRouter }


