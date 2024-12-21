import express from 'express'
import productsRoutes from './routes/products.routes.mjs'

const app = express()
<<<<<<< HEAD

app.use(express.json())
=======
>>>>>>> ceada561a9ceae73e7ce18a6d5b2f67ba6d677ca
app.use(productsRoutes)

export default app