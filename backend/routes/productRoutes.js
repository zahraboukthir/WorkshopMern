const express = require("express");
const { addproduct, allproduct } = require("../controllers/productCotrollers");
const isadmin = require("../midlewares/isadmin");
const router = express.Router();
const isAuth=require('../midlewares/isOff');
const upload = require("../utils/multer");
/**
 * @param POST /product/addProduct
 * @description add Product
 * @access Protected ,Authorizd to Admin
 */

//addNewProduct
router.post(
    "/addProduct",
    isAuth(),isadmin,
    upload("products").single("file"),
    addproduct
  );
/**
 * @param get /product
 * @description all product
 * @access PUblic
 */
 router.get("/", allproduct);

  module.exports=router