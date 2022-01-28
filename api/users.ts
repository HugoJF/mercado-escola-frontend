import {UserProperties, UserType} from "../models/users";
import {ResourceResponse} from "../models/global";
import {bxios} from "../helpers/bxios";

export const users = {
    index: () => bxios()
        .get('users')
        .send<ResourceResponse<UserType[]>>(),
    update: (id: Id, data: Partial<UserProperties>) => bxios()
        .patch('users', id)
        .body(data)
        .send<ResourceResponse<UserType>>(),
};
