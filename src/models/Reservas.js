import mongoose, { Schema, model } from "mongoose";

const reservaSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    conferencista: {
        type: Schema.Types.ObjectId,
        ref: "Conferencista",
        required: true
    },
    auditorio: {
        type: Schema.Types.ObjectId,
        ref: "Auditorio",
        required: true
    }
}, {
    timestamps: true,
    collection: 'reservas'
});

export default model('Reserva', reservaSchema);