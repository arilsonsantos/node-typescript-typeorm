import { Router } from "express"
import { v4 as uuid } from 'uuid'

const rolesRouter = Router()

const roles = []

rolesRouter.post("/", (reqquest, response) => {
    const { name } = reqquest.body

    const role = {
        id: uuid(),
        name: name,
        createdAt: new Date()
    }

    roles.push(role)

    return response.status(201).json(role)

})

rolesRouter.get("/", (req, res) => {
    return res.json({message:"Teste"})
})

export { rolesRouter }


