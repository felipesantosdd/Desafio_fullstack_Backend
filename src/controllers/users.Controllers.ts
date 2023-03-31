import { Request, Response } from "express";
import { INewUserRequest, IUserResponse } from "../interfaces/user.interface";
import { createUserService } from "../services/users/createUser.Service";
import { getUserService } from "../services/users/getUser.Service";

export async function createUserController(req: Request, res: Response): Promise<IUserResponse | any> {
    try {
        const user: INewUserRequest = req.body
        const newUser = await createUserService(user)
        return res.status(201).json(newUser)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export async function getUserController(req: Request, res: Response) {
    try {
        const users = await getUserService()
        return res.status(200).json(users)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}