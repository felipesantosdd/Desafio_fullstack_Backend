import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";

export async function getUserService(): Promise<any> {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users.map(({ password, ...user }) => user)
}