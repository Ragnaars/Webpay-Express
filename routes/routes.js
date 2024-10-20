const express = require("express");

const router = express.Router(); 

//llamar a controladores
const homeController = require("../controllers/homeController");
const webpayController = require("../controllers/webpayController");


router.get("/", homeController.home);
router.get("/nosotros", homeController.nosotros);
router.get("/parametros/:id/:slug",homeController.parametros);
router.get("/query",homeController.query);

//Webpay
router.get("/webpay", webpayController.home)
router.post("/webpay/pagar", webpayController.webpay_pagar)
router.post("/webpay/respuesta", webpayController.webpay_respuesta)


module.exports = router;