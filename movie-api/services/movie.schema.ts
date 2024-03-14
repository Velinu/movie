import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    titulo: String,
    descricao: String,
    nota: Number,
    diretor: String,
    atores: [String],
    poster: String,
}, {versionKey: false})

export default  model('movies', movieSchema);
