import * as actionTypes from "./actionTypes"
import usersService from "../services/user.service"

export async function loadUsers() {
    const users = await usersService.getAllUsers()
    const action: LoadUsersAction = {
        type: actionTypes.LOAD_USERS,
        users
    }
    return (dispatch: any) => dispatch(action)
}

export function addUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.ADD_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function removeUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.REMOVE_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function updateUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: UserAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
        dispatch(action)
        }, 200)
    }
}