// rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");

// iniciar sesión
// api/auth
router.post("/", [authController.autenticarUsuario]);

// obtiene el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
