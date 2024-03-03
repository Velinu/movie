import { app } from "./server/server";
import { connectBD } from "./db/db";

connectBD()



app.listen(process.env.PORT || 8081, () =>{
    console.log(`Server iniciado no link http://localhost:${process.env.PORT}/`)
})