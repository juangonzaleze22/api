import Products from '../models/Products';
export const getProducts = async (req, res) => {
  const products = await Products.find();
  res.json(products);
};
export const createProdurcts = async (req, res) => {
  const {
    name,
    category,
    price,
    photos,
    comment,
    description,
    userId
  } = req.body;
  const newProducts = new Products({
    name,
    category,
    price,
    photos,
    comment,
    description,
    userId
  });
  const productSaved = await newProducts.save();
  res.status(201).json(productSaved);
};
export const getProductsById = async (req, res) => {
  const products = await Products.findById(req.params.productId);
  res.status(201).json(products);
};
export const updateProductsById = async (req, res) => {
  const updateProducts = await Products.findByIdAndUpdate(req.params.productId, req.body, {
    new: true
  });
  res.status(201).json(updateProducts);
};
export const deleteProductsById = async (req, res) => {
  console.log(req.params.productId);
  const productsDelete = await Products.findByIdAndDelete(req.params.productId);
  res.status(201).json('delete produtcs');
};