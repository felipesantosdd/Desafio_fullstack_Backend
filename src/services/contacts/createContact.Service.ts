import { Contact } from "../../entities/contacts";
import { AppError } from "../../error/error";
import { IContact } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";

export async function createContactService(req: any): Promise<IContact> {

    const data: IContact = req.body
    const logedUser = req.user.id

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: logedUser })

    const email = data.email
    const phone = data.phone

    const emailUnavailable = await contactRepository.findOne({
        where: {
            email,
            user: {
                id: logedUser
            }
        }
    })

    const phoneUnavailable = await contactRepository.findOne({
        where: {
            phone,
            user: {
                id: logedUser
            }
        }
    })

    if (emailUnavailable) {
        throw new AppError("Ja existe um usuario com esse email", 409)
    }

    if (phoneUnavailable) {
        throw new AppError("Ja existe um usuario com esse Telefone", 409)
    }

    const newContact: any = contactRepository.create({ user: user, ...data })

    await contactRepository.save(newContact);

    return newContact
}
