import Auditorio from "../models/Auditorios.js"

const crearAuditorio = async (req, res) => {
  try {
    const auditorio = new Auditorio(req.body)
    await auditorio.save()
    res.status(201).json(auditorio)
  } catch (error) {
    console.log(error)
  }
}

const listarAuditorios = async (req, res) => {
  const auditorios = await Auditorio.find()
  res.json(auditorios)
}

const obtenerAuditorio = async (req, res) => {
  try {
    const auditorio = await Auditorio.findById(req.params.id);
    if (!auditorio) return res.status(404).json({ msg: "No se encuentra tal auditorio" })
    res.json(auditorio)
  } catch (error) {
    console.log(error)
  }
};

const actualizarAuditorio = async (req, res) => {
  try {
    const auditorio = await Auditorio.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({msg:"Auditorio actualizado correctamente!", auditorio})
  } catch (error) {
    console.log(error)
  }
}

const eliminarAuditorio = async (req, res) => {
  try {
    await Auditorio.findByIdAndDelete(req.params.id)
    res.json({ msg: "Auditorio eliminado de forma exitosa" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearAuditorio, 
    listarAuditorios,
    obtenerAuditorio, 
    actualizarAuditorio, 
    eliminarAuditorio 
}