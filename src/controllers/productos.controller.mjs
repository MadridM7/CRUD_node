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

export const getProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql.query`
      SELECT 
        * 
      FROM Productos
      WHERE 
      id = ${id}
      `;

    res.status(200).json(result.recordset || [])
  } catch (err) { res.status(500).json(errorResponse) }
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

export const updateProduct = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre, marca } = req.body;

    const exist = await sql.query`
      SELECT id 
      FROM Productos
      WHERE id = ${ id }
      `;

    if ( exist.recordset ) {
      const result = await sql.query`
        UPDATE Productos
        SET nombre = ${ nombre }, marca = ${ marca }
        WHERE id = ${ id }
      `;

      res.status(200).json(result.recordset || [])
    }
  } catch (err) { res.status(500).json(errorResponse); console.log(err) }
}

export const deleteProduct = (req, res) => {
  res.send('Eliminando Producto')
}
