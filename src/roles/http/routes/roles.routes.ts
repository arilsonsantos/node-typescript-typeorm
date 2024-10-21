import { Router } from "express"
import { v4 as uuidV4 } from 'uuid'
import {
    Role
} from "@roles/entities/Roles";

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post("/", (reqquest, response) => {
    const { name } = reqquest.body

    const role = new Role()
    role.name = name

    roles.push(role)

    return response.status(201).json(role)

})

rolesRouter.get("/", (req, res) => {
    return res.json({message:"Teste"})
})

export { rolesRouter }


