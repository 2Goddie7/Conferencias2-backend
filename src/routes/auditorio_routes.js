import { Router } from "express"
import { crearAuditorio, listarAuditorios, obtenerAuditorio, actualizarAuditorio, eliminarAuditorio } from "../controllers/auditorio_controller.js"
import { validarCrearAuditorio } from "../middleware/validarCampos.js"
import autorizacion from "../middleware/JWT.js"

const router = Router()

router.post('/',autorizacion, validarCrearAuditorio,crearAuditorio)
router.get('/',autorizacion,listarAuditorios)
router.get('/:id',autorizacion,obtenerAuditorio)
router.put('/:id',autorizacion,validarCrearAuditorio,actualizarAuditorio)
router.delete('/:id',autorizacion,eliminarAuditorio)

export default router