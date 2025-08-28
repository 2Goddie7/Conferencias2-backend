import mongoose, { Schema, model } from "mongoose";

const auditorioSchema = new Schema({
    codigo: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    capacidad: {
        type: String,
        required:true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    collection: 'auditorios'
});

export default model('Auditorio', auditorioSchema);