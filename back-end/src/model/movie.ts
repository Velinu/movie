import mongoose from 'mongoose'
import {iMovie, iMovieMethods} from '../interfaces/iMovie'

const movieSchema = new mongoose.Schema<iMovie>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    rating: {
        type: Number
    },
    img: {
        type: String
    },
    status: {
        type: Number
    },
    
}, {versionKey: false})

const Movie = mongoose.model<iMovie>('movies', movieSchema)

async function postMovie(   name:String, 
                            description: String, 
                            rating: Number, 
                            img: String, 
                            status: 1 |  2 | 3) {

    const movie = new Movie({
        name:            name,
        description:     description,
        rating:          rating,
        img:             img,
        status:          status
    })
    await movie.save();
    return 'Documento salvo com sucesso';
    
}

export {postMovie }


