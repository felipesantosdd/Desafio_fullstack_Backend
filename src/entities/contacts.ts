import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm'
import { IUser } from '../interfaces/user.interface';
import { User } from './user';

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60 })
    email: string;

    @Column()
    phone: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.contact, { nullable: true })
    user: User;

}