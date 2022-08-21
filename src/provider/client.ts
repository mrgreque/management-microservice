import { knex } from 'knex';
import { config } from 'dotenv';

config();

const client = knex({
    client: 'postgresql',
    connection: process.env.DATABASE_URL
});

export { client };