const { productmodel } = require("../Models/product");

//later add joi lib for verification
//const Joi = require("joi");

// get all products
const getProductsService = async () => {
  const productList = await productmodel.find();

  return productList;
};

// get one product by id
const getProductByIdService = async (productId) => {
  const product = await productmodel.findById(productId);
   if(!product){
    return {message: "product not found"};
   }
  return product;
};

//need to check from data before add to DB
const addProductService = async (productInfo) => {
  const newProduct = new productmodel(productInfo);
  return await newProduct.save();
};

/* deleteMany({}) methode return object deleteAllProducts = {
  acknowledged: true,
  deletedCount: 0
}
*/
const deleteAllProdectService = async () => {
  const deleteAllProducts = await productmodel.deleteMany({});
  return deleteAllProducts;
};

module.exports = {
  getProductsService,
  addProductService,
  deleteAllProdectService,
  getProductByIdService,
};
