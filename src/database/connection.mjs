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

<<<<<<< HEAD
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
=======
export const getConnection = async () => {
  try {
    const pool = sql.connect(config);

    return pool; 
  } catch (error) {
    console.error(error);
  }
};
>>>>>>> ceada561a9ceae73e7ce18a6d5b2f67ba6d677ca
