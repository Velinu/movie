import movieModel from './movie.schema'

export class movieService {
    async create(movie: any){
        try{
            const newMovie = movieModel.create(movie)
            return newMovie
        }catch(error) {
            return error
        }
    }

    //async findById
}
