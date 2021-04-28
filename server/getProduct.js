const products = require('../products.json')

const getOneProduct = (req,res) =>{
    
    console.log("PARAMS:", req.params)
    console.log("Query:", req.query)
    console.log("Body:", req.body)
    const foundIndex = products.find( products => products.id === parseInt(req.params.id))
    if(!foundIndex){
        res.status(500).send("Item not in list")
    }
    else{
        return  res.status(200).send(foundIndex)
    }
};

module.exports =  getOneProduct