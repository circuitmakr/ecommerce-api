const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts');
const getOneProduct = require('./getProduct');
const getPrice = require('./getPrice');

const app = express();

app.use(express.json());
app.get('/api/getProducts/', getProducts)
app.get('/api/getOneProduct/:id', getOneProduct)
app.get('/api/getPrice/', getPrice)

const port = 5001;
app.listen(port, ()=>console.log(`Server is running on ${port}. Happy Coding Kendal!`))