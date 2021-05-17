import * as actionTypes from "./actionTypes"
import usersService from "../services/user.service"
import authService from "../services/auth.service"
    
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

export async function removeUser(user: IUser) {
    return await usersService.removeUser(user.cpf)
        .then(() => {
            const action: UserAction = {
                type: actionTypes.REMOVE_USER,
                user,
            }
            return action
        })
        .catch(()=>{
            const action: RemoveUserErrorAction = {
                type: actionTypes.REMOVE_USER_ERROR,
                message: {success: false, msg:['É necessário autenticar!'] },
            }
            return action
            
        })
}

export function updateUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    return action
}


export async function authUser(credentials: Credentials) {
    return await authService.login(credentials)
    .then((response) => {
        const action: AuthAction = {
            type: actionTypes.AUTH_USER,
            token: response.token,
        }
        return action;
    })
    .catch(()=>{
        const action: AuthErrorAction = {
            type: actionTypes.AUTH_USER_ERROR,
            message: {success: false, msg:['Não autorizado'] }
        }
        return action;
    })
}

