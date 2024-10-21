import {
    Router
} from "express"
import {
    RolesRepository
} from "@roles/repositories/RolesRepository";

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post("/", (reqquest, response) => {
    const  { name }  = reqquest.body

    const role = rolesRepository.create( { name })

    return response.status(201).json(role)

})

rolesRouter.get("/", (req, res) => {
    return res.json({message:"Teste"})
})

export { rolesRouter }


