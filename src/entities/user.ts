import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert } from 'typeorm'
import { Contact } from './contacts';
import { hashSync } from "bcryptjs";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60 })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contact: Contact[]

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

}