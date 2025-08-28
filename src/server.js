//Importación de modulos
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import routerUsuarios from './routes/usuario_routes.js'
import routerConferencistas from './routes/conferencista_routes.js'
import routerAuditorios from './routes/auditorio_routes.js'
import routerReservas from './routes/reserva_routes.js'

//Inicalizaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.use(cors())

//Middleware
app.use(express.json());

//Rutas
app.get(
    '/', (req,res)=>{
        res.send("Servidor Activo")
})

//Rutas usuario
app.use('/api',routerUsuarios)
//Rutas clientes
app.use('/api/conferencistas',routerConferencistas)
//Rutas vehiculos
app.use('/api/auditorios',routerAuditorios)
//Rutas reservas
app.use('/api/reservas',routerReservas)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor!')
})

export default app