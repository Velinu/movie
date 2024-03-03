import { ObjectId } from "mongodb"
interface iMovie{
    _id: ObjectId
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
        _id:Number,
        name:String, 
        description: String, 
        rating: Number, 
        img: String, 
        status: 1 |  2 | 3): Response,
    patchMovie(
        _id:Number,
        name:String, 
        description: String,
        rating: Number, 
        img: String, 
        status: 1 |  2 | 3): String,
    deleteMovie(name: String): String
}

export {iMovie, iMovieMethods}