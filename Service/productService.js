const { productmodel } = require("../Models/product");

//later add joi lib for verification
//const Joi = require("joi");

const getProductsService = async () => {
  const productList = await productmodel.find();

  if (productList.length === 0) {
    return "no product found";
  }

  return productList;
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
};
