import express from 'express'

const app = express()
app.use(express.json())//parse do JSON
//rota publica
app.use('/', express.static('public'))
//define o favicon
app.use('/favicon.ico', express.static('public/images/logo.png'))
//listen
app.listen(3000, function(){
    console.log('Servidor rodando!')
})