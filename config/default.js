const config = {
  knex: {
    "client": "postgresql",
    "connection": {
      "database": "thesis",
      "user": "postgres",
      "password": "postgres",
      "host": "localhost",
      "port": 5432
    },
    pool: {
      min: 1,
      max: 2,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'db/migrations',
    },
    seeds: {
      directory: 'db/seeds',
    },
  }
}

module.exports = config
