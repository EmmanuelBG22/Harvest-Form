import { ConnectionOptions } from "typeorm";

const dbConnection: ConnectionOptions = {
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.entity.ts"],
  migrations: ["src/migrations/**/*.migration.ts"], //list of migrations needed to be ran by TypeORM
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations", //tells typeorm cli the directory to put a generated migration file
  },
};

export default dbConnection;
