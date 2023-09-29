import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entities/Task"

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PGHOST,
    port: 5432, // Default PostgreSQL port
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true, // Para Dev
    logging: true, // Para Dev
    entities: [Task], // Se requiere incluir cada nueva entidad
    migrations: [],
    subscribers: [],
    ssl: { rejectUnauthorized: false }, // Ignora el error de certificado no confiable
    name: 'default', // Asegúrate de definir el nombre de la conexión
})
