import app from './app.mjs'
import { databaseConnection } from './database/connection.mjs'

app.listen(3000)

databaseConnection();