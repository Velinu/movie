import express from 'express'
import mongoose from 'mongoose'
class app {
    express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        //this.routes()
    }

    private middleware(): void {
        this.express.use(express.json)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/movie-api')
            console.log('Conectado ao banco')
        } catch (error) {
            console.error('Não foi possível se conectar com o banco: ' + error)
        }
    }
}

export default new app().express
