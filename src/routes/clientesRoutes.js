const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.get("/", controller.get)

router.post("/", controller.post)

router.get("/compradores", controller.getCompradores)


module.exports = router