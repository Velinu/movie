import mongoose from 'mongoose'

async function connectBD() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/movie-api')
    }catch(error){
        return(error);
    }
}

export { connectBD}