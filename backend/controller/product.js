import Product from '../models/product.js'

const createProduct = (req, res) => {
    const {name, price, description} = req.body;
    // const img = req.file.filename

    const product = new Product({
        name: name,
        price,
        description,
        // img
    })

    product.save((error,product) =>{
        if(error){
            return res.status(400).json({error})
        }
        if(product){
            res.status(201).json({product});
        }
    });
}

export default createProduct;