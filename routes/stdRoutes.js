const router = require("express").Router();
const containCtlr=require("../controllers/stdAllCtlr")

router.post("/",containCtlr.create);
router.get("/",containCtlr.alldata);
router.delete("/:Id",containCtlr.deleteAll);

module.exports = router;


// const router = require("express").Router();
// const productController = require("../controllers/productController")

// router.post("/",productController.product_create);
// router.get("/",productController.product_all);
// router.get("/:productId",productController.product_details);
// router.put("/:productId",productController.product_update);
// router.delete("/:productId",productController.product_delete);


// module.exports = router;