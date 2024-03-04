import { Router } from "express";
import { movieController } from "../controllers/movie";
const router = Router()

router.get('/', (req,res) => {
    return res.status(400).send('Servidor iniciado')
})

router.post('/', (req,res)=>{
    console.log(req.body)
    movieController.postMovie(
                              req.body.name, 
                              req.body.description, 
                              req.body.rating, 
                              req.body.img,
                              req.body.status)

    res.send('foi')
})

export { router }