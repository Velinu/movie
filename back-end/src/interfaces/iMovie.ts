import mongoose from "mongoose"
interface iMovie{
    name: String,
    description: String,
    rating: Number,
    img: String
    status: 1 | 2 | 3
}

interface iMovieMethods{
    getAllMovies(): Array<JSON>,
    getMovie(name: String): JSON,
    postMovie(
        _id: Number,
        name:String, 
        description: String, 
        rating: Number, 
        img: String, 
        status: 1 |  2 | 3): Response,
    patchMovie(
        name:String, 
        description: String,
        rating: Number, 
        img: String, 
        status: 1 |  2 | 3): String,
    deleteMovie(name: String): String
}

export {iMovie, iMovieMethods}