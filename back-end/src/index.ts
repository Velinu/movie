import { app, port } from "./server/server";

app.get('/', (req,res) => {
    return res.send('Servidor, aivado')
})

app.listen(port, () =>{
    console.log(`Server iniciado no link http://localhost:${port}/`)
})