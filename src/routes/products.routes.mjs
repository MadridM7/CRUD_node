import { Router } from 'express'
import {getProducts, getProductId, createProduct, updateProduct, deleteProduct } from '../controllers/productos.controller.mjs'

const router = Router()

router.get('/productos', getProducts)

router.get('/productos/:id', getProductId)

router.post('/productos', createProduct)

router.put('/productos/:id', updateProduct)

router.delete('/productos/:id', deleteProduct)

export default router