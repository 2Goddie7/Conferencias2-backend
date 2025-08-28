import { check, validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Usuarios
export const validarRegistroUsuario = [
  check("nombre").notEmpty().withMessage("Nombre obligatorio")
    .isLength({ max: 20 }).withMessage("Nombre demasiado largo"),
  check("apellido").notEmpty().withMessage("Apellido obligatorio")
    .isLength({ max: 20 }).withMessage("Apellido demasiado largo"),
  check("email").isEmail().withMessage("El correo no es valido"),
  check("password").isLength({ min: 6 }).withMessage("La contraseña debe tener mínimo 6 caracteres"),
  validarCampos
];

export const validarLoginUsuario = [
  check("email").isEmail().withMessage("Correo inválido"),
  check("password").notEmpty().withMessage("Contraseña obligatoria"),
  validarCampos
];

// Conferencista
export const validarCrearConferencista = [
  check("nombre").notEmpty().withMessage("EL nombre es obligatorio"),
  check("apellido").notEmpty().withMessage("El apellido obligatorio"),
  check("cedula").isLength({ min: 10, max: 10 }).withMessage("La cédula debe contener 10 digitos"),
  check("telefono").isLength({ min: 10, max: 10 }).withMessage("Ingrese un telefono valido"),  
  check("genero").notEmpty().withMessage("El apartado genero no puede quedar vacio"),
  check("ciudad").notEmpty().withMessage("Debe ingresar la ciudad"),
  check("empresa").notEmpty().withMessage("Debe ingresar la empresa"),
  check("direccion").notEmpty().withMessage("Debe ingresar su dirección"),
  check("fecha_nacimiento").notEmpty().withMessage("Debe ingresar su fecha de nacimiento"),
  check("email").isEmail().withMessage("Correo no valido"),
  validarCampos
];

// Auditorio
export const validarCrearAuditorio = [
  check("nombre").notEmpty().withMessage("El nombre del auditorio es obligatorio"),
  check("ubicacion").notEmpty().withMessage("La ubicacion es obligatoria"),
  check("capacidad").notEmpty().withMessage("Indique cual es la capacidad del auditorio"),
  check("descripcion").notEmpty().withMessage("Ingrese una descripcion detallada del auditorio"),
  validarCampos
];

// Reservas
export const validarCrearReserva = [
  check("codigo").notEmpty().withMessage("El código de la reserva es obligatorio!"),
  check("conferencista").notEmpty().withMessage("Debe indicar el id del conferencista"),
  check("auditorio").notEmpty().withMessage("Debe indicar el id del auditorio que se está reservando"),
  validarCampos
];