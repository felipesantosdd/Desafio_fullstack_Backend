import jwt from 'jsonwebtoken';

export function tokenVerification(token) {
    const decoded = jwt.verify(token, 'chave-secreta')
    return decoded
}