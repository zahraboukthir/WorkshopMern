const ProductModel = require("../model/ProductModel");

const addproduct = async (req, res) => {
  const url = `${req.protocol}://${req.get("host")}`;
  console.log(req.file);
  const { file } = req;
  try {
    const newproduct = await new ProductModel({
      ...req.body,
      user: req.user._id,
    });
    newproduct.image = `${url}/${file.path}`;
    await newproduct.save();
    res.send({ newproduct, msg: "product succefully added" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//get all products
const allproduct = async (req, res) => {
  try {
    const allProducts = await ProductModel.find({}).populate(
      "user",
      "fullName"
    );
    res.send({ allProducts });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { addproduct,allproduct };
