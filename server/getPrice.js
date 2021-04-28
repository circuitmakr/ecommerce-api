const products = require('../products.json')

const getPrice = (req, res) => {
    console.log("PARAMS:", req.params)
    console.log("Query:", req.query)
    console.log("Body:", req.body)
    if (req.query.price) {
      const items = products.filter(
        (purchaseprice) => purchaseprice.price >= parseInt(req.query.price)
      )
      return res.status(200).send(items)
    }
    res.status(200).send(items)
  }



module.exports =  getPrice