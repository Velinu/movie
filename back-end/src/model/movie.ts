import mongoose from 'mongoose'
import {iMovie, iMovieMethods} from '../interfaces/iMovie'

const movieSchema = new mongoose.Schema<iMovie>({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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
        type: Number
    },
    status: {
        type: Number
    }
})

const Movie = mongoose.model<iMovie>('movies', movieSchema)

async function postMovie( _id: Number,
                            name:String, 
                            description: String, 
                            rating: Number, 
                            img: String, 
                            status: 1 |  2 | 3) {
    const movie = new Movie({
        _id:            Number,
        name:           `${name}`,
        description:    `${description}`,
        rating:          rating,
        img:            `${img}`,
        status:          status
    })

}



