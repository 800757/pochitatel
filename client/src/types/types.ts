export interface IUser {
    id: number
    email: string
    token: string
}

export interface IUserData {
    email: string
    password: string
    library_card: string
}

export interface IUserDataLog {
    email: string
    password: string
}

export interface IResponseUser {
    email: string
    id: number
    library_card: string
    password: string
}

export interface IResponseUserData {
    token: string
    user: IResponseUser
}