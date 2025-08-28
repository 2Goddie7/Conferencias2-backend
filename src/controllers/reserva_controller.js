import Reserva from "../models/Reservas.js"

const crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body)
    await reserva.save()
    res.status(201).json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const listarReserva = async (req, res) => {
  const reservas = await Reserva.find()
    .populate("conferencista", "nombre apellido email")
    .populate("auditorio", "nombre codigo")
  res.json(reservas)
}

const obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id)
      .populate("conferencista", "nombre apellido")
      .populate("auditorio", "nombre codigo")
    if (!reserva) return res.status(404).json({ msg: "Reserva no encontrada" })
    res.json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const eliminarReserva = async (req, res) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id)
    res.json({ msg: "Reserva eliminada" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearReserva,
    listarReserva,
    obtenerReserva, 
    actualizarReserva, 
    eliminarReserva
}