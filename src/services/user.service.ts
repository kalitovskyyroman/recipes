import { get } from "../api/http"
import IUserDto from "../interfaces/IUserDto"

const getUsers = async () => get<IUserDto[]>('/users')

export { getUsers }
