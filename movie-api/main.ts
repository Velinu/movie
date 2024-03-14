import app from "./app";
import model from './services/movie.schema'
function main() {
    app.listen(3000, 'localhost', () => {
        console.log("api iniciada no link http://localhost:3000/movie")
    })

    model.create({
        "id": 1,
        "titulo": "Matrix",
        "descricao": "Um hacker descobre a verdade sobre a realidade e sua luta contra máquinas que dominam o mundo.",
        "nota": 9,
        "diretor": "Lana Wachowski",
        "atores": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "poster": "matrix_poster.jpg"
    })
}

main()