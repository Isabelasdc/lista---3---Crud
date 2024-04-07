// Imports
const express = require('express')
const tarefas = require('./routes/tarefas')

// Porta
const port = 3000

// configuração
const app = express()

// Middlwares
app.use(express.json())
// Trazendo as rotas do modulo tarefas
 app.use(tarefas)



// contrato -> configuração das rotas e da lógica
app.get('/', (req, res) =>{
    res.send("Aplicação Tarefas rodando!")
})







// Start da aplicação
app.listen(3000,() =>{
    console.log("Api tarefas rodando em http://localhost:3000")
})