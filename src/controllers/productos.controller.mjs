import { sql, errorResponse } from '../database/connection.mjs'

export const getProducts = async (req, res) => {
  try {
    const result = await sql.query`
      SELECT 
        * 
      FROM Productos
      `;

    res.status(200).json(result.recordset || [])
  } catch (err) { res.status(500).json(errorResponse) }
}

export const getProductId = (req, res) => {
  res.send('Obteniendo Productos Especifico')
}

export const createProduct = async (req, res) => {
  try {
    const {id, nombre, marca} = req.body;

    const result = await sql.query`
      INSERT INTO
       Productos 
      VALUES (
        ${id}, 
        ${nombre}, 
        ${marca}
      )`;

    res.status(200).json(result.recordset || [])
  } catch (err) { res.status(500).json(errorResponse); console.log(err) }
  
}

export const updateProduct = (req, res) => {
  res.send('Actualizando Producto')
}

export const deleteProduct = (req, res) => {
  res.send('Eliminando Producto')
}
