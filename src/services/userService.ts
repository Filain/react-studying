import {axiosService, IRes} from "./axiosService";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";
import {AxiosResponse} from "axios";

const userService = {
    // getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),

    // Можна і не використовувати IRes а просто писати Promise<AxiosResponse<>>
    getAll: (): Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users.base),
    getById: (id: number): IRes<IUser> => axiosService.get(urls.users.byId(id))
}
export {userService}