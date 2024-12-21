import sql from 'mssql'
import 'dotenv/config'

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
}

async function databaseConnection() {
  try {
      sql.connect(config);
  } catch (err) {
      console.error('Ocurrió un error al conectar con la BD.'/*, err*/);
  }
}

const errorResponse = {
  resultado: false,
  error: 'Ocurrió un error al consultar datos.'
};

export { sql, databaseConnection, errorResponse }
