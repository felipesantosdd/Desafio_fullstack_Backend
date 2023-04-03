import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/user.interface";
import { LoginService } from "../services/users/login.Service";

export const LoginController = async (req: Request, res: Response) => {
    try {
        const data: ILoginRequest = req.body
        const token = await LoginService(data)
        return res.status(200).json(token)
    } catch (error) {
        return res.status(403).json({ error: error })
    }
}