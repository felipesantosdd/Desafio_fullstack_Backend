import { DataSource } from "typeorm";
import 'dotenv/config'

import path from "path";
import { User } from "./entities/user";
import { Contact } from "./entities/contacts";

const migrationsPath = path.join(__dirname, "./migrations/**{ts, js}");
const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: false,
    logging: true,
    entities: [User, Contact],
    migrations: [migrationsPath],
})

