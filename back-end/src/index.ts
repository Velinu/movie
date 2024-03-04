import { app } from "./server/server";
import { connectBD } from "./db/db";
import { movieController } from "./controllers/movie";

connectBD()
//movieController.postMovie(1,'a','',0,'',1)



app.listen(process.env.PORT || 8081, () =>{
    //console.log(`Server iniciado no link http://localhost:${process.env.PORT}/`)
})