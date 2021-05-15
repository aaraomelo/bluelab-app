import * as actionTypes from "./actionTypes"
import usersService from "../services/user.service"

export async function loadUsers() {
    const users = await usersService.getAllUsers()
    const action: LoadUsersAction = {
        type: actionTypes.LOAD_USERS,
        users
    }
    return action;
}

export async function addUser(user: IUser) {

    return await usersService.addUser(user)
        .then(() => {
            const action: UserAction = {
                type: actionTypes.ADD_USER,
                user,
            }
            return action;
        })
        .catch((message) => {
            const action: AddUsersErrorAction = {
                type: actionTypes.ADD_USERS_ERROR,
                message,
            }
            return action;
        })
}

export function removeUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.REMOVE_USER,
        user,
    }
    return action
}

export function updateUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    return action
}
