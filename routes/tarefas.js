 const express = require('express')
 const router = express.Router ()

// criar lista
 let listTarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]
// READ - Buscar todas as tarefas
router.get('/tarefas' , (req, res) =>{
    res.json(listTarefas)
 })


//  RED - BUSCA PELO IDENTIFICADOR /1 ex
router.get('/tarefas/:id' , (req, res) => {
    const id = req.params.id
    const tarefas =listTarefas[id]
    res.json(tarefas)
})

//CREATE - Cadastrar um contato
router.post('/tarefas' , (req, res)=>{
    const tarefas = req.body
    listTarefas.push(tarefas.nome)
    res.status(201).json({mensagem: "Tarefa criado com sucesso!"})
    
})


// DELETE - REMOVER UMA TAREFA DA LISTA COM BASE EM SEU IDENTIFICADOR
router.delete('/tarefas/:id' , (req, res)=>{
    const id = req.params.id
    listTarefas.splice(id, 1)
    res.json({mensagem: "Tarefa excluida com sucesso!"})
})

// UPDATE - ATUALIZAR UMA TAREFA EXISTENTE COM BASE EM SEU IDENTIFICADOR
router.put('/tarefas/:id', (req, res) =>{
    const id = req.params.id
    const tarefa = req.body
    listTarefas[id] = tarefa.nome
    res.json({mensagem: "Tarefa Atualizada."})
})





 module.exports = router