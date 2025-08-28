import mongoose, { Schema, model } from "mongoose";

const conferencistaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    genero: {
        type:String,
        required:true
    },
    ciudad: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    empresa:{
        type:String,
        required: true
    }
}, {
    timestamps: true,
    collection: 'conferencistas'
});

export default model('Conferencista', conferencistaSchema);