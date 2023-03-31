import { AppDataSource } from "../../data-source";
import { INewUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { User } from '../../entities/user';
import { AppError } from '../../error/error';

export async function createUserService(user: INewUserRequest | any): Promise<any> {
    const userRepository = AppDataSource.getRepository(User)

    const email = user.email

    const emailUnavailable = await userRepository.findOneBy({ email: email })

    if (emailUnavailable) {
        throw new AppError("este Email ja está sendo usado", 409)
    }

    const newUser: any = userRepository.create(user)
    await userRepository.save(newUser)


    const { password, ...data } = newUser

    return data

}
