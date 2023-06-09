import { DataSource } from "typeorm";
import 'dotenv/config'

import path from "path";
import { User } from "./entities/user";
import { Contact } from "./entities/contacts";
import { updateUser1680292265617 } from "./migrations/1680292265617-updateUser";
import { alterTablecontacts1680534900556 } from "./migrations/1680534900556-alterTablecontacts";
import { updatePhone1680802635841 } from "./migrations/1680802635841-updatePhone";
import { phoneUserUpdate1681404443319 } from "./migrations/1681404443319-phoneUserUpdate";

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
    migrations: [updateUser1680292265617, alterTablecontacts1680534900556, updatePhone1680802635841, phoneUserUpdate1681404443319],
    // migrations: [migrationsPath],
})

