import {userCollection} from "../db";

interface ICreateUser {
    login: string
    password: string
}

export const userController = {
    async createUser(newUser: ICreateUser) {
        return await userCollection.insertOne(newUser)
    },
}