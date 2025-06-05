const express = require('express')
const path = require('path')

const app = express() //inicializando express

//definindo o TEMPLATE ENGINE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post (formulario)
app.use(express.urlencoded({extended: true}))

//rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

//404 error / not found
app.use((req, res) => { //MIDDLEWARE
    res.send('Página não encontrada!')
})

//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))