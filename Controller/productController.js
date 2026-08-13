const {
  getProductsService,
  addProductService,
  deleteAllProdectService,
} = require("../Service/productService");

//all users can send req.
const getProductsController = async (req, res, next) => {
  try {
    const productList = await getProductsService();
    return res
      .status(200)
      .json({ message: "Found Product List: ", productList });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* deleteAllProdectService() methode return object 
{
  acknowledged: true,
  deletedCount: 0 --> i send this directly
}
*/
const deleteallProductController = async (req, res, next) => {
  try {
    const deleteResult = await deleteAllProdectService();
    const deletedCount = deleteResult.deletedCount;
    return res
      .status(200)
      .json({ message: "deleted " + deletedCount + " Done" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//check from req.body
const addProductController = async (req, res, next) => {
  try {
    const product = await addProductService(req.body);
    return res
      .status(200)
      .json({ message: "product added", product: product._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductsController,
  addProductController,
  deleteallProductController,
};
