import ProductManager from "./ProductManager.js"
import express from 'express'

const app = express ()
const PORT = 8080

let archivo = new ProductManager('./productos.json')

//Productos
app.get('/productos',(req,res)=>{
    console.log('Todos los productos')

    let {limite} = req.query
    console.log(limite)

    if(limite){
        let productos = archivo.getProductslimit(Number(limite))
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
    console.log(`el id es ${id}`)
    let producto = archivo.getProductBYId(Number(id))
    console.log(producto)
    res.json(producto)
})

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})


