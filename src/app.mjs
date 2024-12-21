import express from 'express'
import productsRoutes from './routes/products.routes.mjs'

const app = express()
app.use(productsRoutes)

export default app