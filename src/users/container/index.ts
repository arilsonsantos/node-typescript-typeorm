import { container } from "tsyringe"
import { UsersRepository } from "../repositories/UsersRepository"
import { CreateUserController } from "../useCases/createUser/CreateUserController"
import { IUsersRepository } from "../repositories/IUsersRepository"
import { ListUserController } from "@users/useCases/listUsers/ListUserController"

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUserController', ListUserController)

