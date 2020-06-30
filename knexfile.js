// Update with your config settings.
require('dotenv').config()
module.exports = {


  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      user:     'sweyome',
      password: 'Tsinat20'
  
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./Database/migrations"
    },
    seeds: {
      directory: "./Database/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./Database/migrations"
    },
    seeds: {
      directory: "./Database/seeds"
    }
  }

};
