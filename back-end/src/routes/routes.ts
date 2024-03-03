import { Router } from "express";
const router = Router()

router.get('/', (req,res) => {
    return res.status(400).send('Servidor iniciado')
})

export { router }