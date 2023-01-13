import dotenv from "dotenv";
dotenv.config();

import awilix, { AwilixContainer } from "awilix";
import { DataSource } from 'typeorm'
import { Users } from '../entitys/Users/entity.js'
import { Restaurants } from '../entitys/Restaurants/entity.js'
import { Dishes } from '../entitys/Dishes/entity.js'


// docker + db setup
//https://dev.to/chandrapantachhetri/docker-postgres-node-typescript-setup-47db

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users, Restaurants, Dishes],
    synchronize: true,
    logging: false,
})

export async function registerDatabase(container: AwilixContainer) {
    const db = AppDataSource
    console.log("Connected to DB");
    container.register({
        db: awilix.asValue(db),
    });

}