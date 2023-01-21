import ProductManager from "./ProductManager.js"
import express from 'express'

const app = express ()
const PORT = 8080

let archivo = new ProductManager('./productos.json')

//Productos
app.get('/productos',(req,res)=>{
    let {limit} = req.query
    if(limit){
        let productos = archivo.getProductslimit(Number(limit))
        res.json(productos)
    }
    else{
        let productos = archivo.getProducts()
        res.json(productos)
    }
})

//Productos por id
app.get('/productos/:id',(req,res)=>{
    console.log('Buscar elemento por ID:')
    let { id } = req.params
    let producto = archivo.getProductBYId(Number(id))
    producto!=undefined?res.json(producto):res.json({message:'El id no existe'})
})

//Server listening
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})


