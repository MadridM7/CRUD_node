import app from './app.mjs'
<<<<<<< HEAD
import { databaseConnection } from './database/connection.mjs'

app.listen(3000)

databaseConnection();
=======
import { getConnection } from './database/connection.mjs'

getConnection()

app.listen(3000)

>>>>>>> ceada561a9ceae73e7ce18a6d5b2f67ba6d677ca
