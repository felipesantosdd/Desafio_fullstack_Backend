import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response, request } from "express";

export const authMiddleware = async (req: any, res: Response, next: NextFunction) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Autenticação Obrigatoria" })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if (error) {
            return res.status(401).json({ message: error.message })
        }

        req.user = {
            id: decoded.sub as string,
            isAdm: decoded.isAdm,
        };

        return next()

    })

}