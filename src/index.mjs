import app from './app.mjs'
import { getConnection } from './database/connection.mjs'

getConnection()

app.listen(3000)

