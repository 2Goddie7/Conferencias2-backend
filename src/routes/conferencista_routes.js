import { Router } from "express"
import { crearConferencista, listarConferencistas, obtenerConferencista, actualizarConferencista, eliminarConferencista } from "../controllers/conferencista_controller.js"
import autorizacion from "../middleware/JWT.js"
import { validarCrearConferencista } from "../middleware/validarCampos.js"

const router = Router()

router.post("/", autorizacion,validarCrearConferencista, crearConferencista);
router.get("/", autorizacion, listarConferencistas);
router.get("/:id", autorizacion, obtenerConferencista);
router.put("/:id", autorizacion, validarCrearConferencista, actualizarConferencista);
router.delete("/:id", autorizacion, eliminarConferencista);

export default router