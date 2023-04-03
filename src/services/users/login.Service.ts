import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import { AppError } from "../../error/error";
import { ILoginRequest } from "../../interfaces/user.interface";
import jwt from "jsonwebtoken";

export const LoginService = async (data: ILoginRequest) => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email: data.email })

    if (!user) {
        throw new AppError("Email ou Password invalido", 403)
    }

    const passwordMatch = await compare(data.password, user.password)

    if (!passwordMatch) {
        throw new AppError("Email ou Password invalido", 403)
    }

    const token = jwt.sign({}, process.env.SECRET_KEY, {
        subject: user.id,
        expiresIn: "24h"
    })

    return token
}