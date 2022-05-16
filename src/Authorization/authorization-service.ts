import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import {userController} from "./authorization-controller";

async function _generatePassword(password: string, salt: string) {
    const hash = await bcrypt.hash(password, salt)
    return hash
}

export const userService = {
     async createUser(req: Request, res: Response) {
        const passwordSalt = await bcrypt.genSalt(10)
        const passwordHash = await _generatePassword(req.body.password, passwordSalt)

        const newUser = {login: req.body.login, password: passwordHash}
        const result = await userController.createUser(newUser)
        debugger
         res.send(200)
     },
}