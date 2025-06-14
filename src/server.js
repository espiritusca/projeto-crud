const express = require('express')//primeiro modulos instalados/externos
const path = require('path')

const db = require('./database') //Depois modulos criados/ esse em database/index.js
const routes = require('./routes')// outro modulo criado / routes/index.js 

const app = express() //inicializando express

//conexao com o banco de dados
db.connect()

//definindo o TEMPLATE ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post (formulario)
app.use(express.urlencoded({extended: true}))

//definindo as rotas
app.use('/', routes)

//404 error / not found
app.use((req, res) => { //MIDDLEWARE
    res.send('Página não encontrada!')
})

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))