import Conferencista from "../models/Conferencistas.js"

const crearConferencista = async (req,res)=>{
    try {
        const conferencista = new Conferencista(req.body)
        await conferencista.save()
        res.status(201).json(conferencista)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const listarConferencistas = async (req, res) => {
  const conferencistas = await Conferencista.find()
  res.json(conferencistas)
}

const obtenerConferencista = async (req, res) => {
  try {
    const conferencista = await Conferencista.findById(req.params.id)
    if (!conferencista) return res.status(404).json({ msg: "Conferencista no encontrado" })
    res.json(conferencista)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const actualizarConferencista = async (req, res) => {
  try {
    const conferencista = await Conferencista.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(conferencista)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const eliminarConferencista = async (req, res) => {
  try {
    await Conferencista.findByIdAndDelete(req.params.id)
    res.json({ msg: "Conferencista eliminado correctamente" })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export { 
    crearConferencista,
    listarConferencistas, 
    obtenerConferencista, 
    actualizarConferencista, 
    eliminarConferencista 
}