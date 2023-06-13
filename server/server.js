const exp = require('express')
const app = exp()
const mysql = require('mysql')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors =require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:"password",
    database:"cards"
}
)
app.listen(3500,()=>console.log("Server active"))
app.use(exp.json())
app.post('/add',(req,response)=>{
    const id = req.body.id
    const word = req.body.Word
    const meaning = req.body.Meaning
    const image  =req.body.image
    let query = 'INSERT INTO cards.flashcard (id,Word,Meaning,image) values(?,?,?,?)'
    db.query(query,[id,word,meaning,image],(err,res)=>{
        if(res){    
            console.log(res)
            response.send(res)
        }
        else{
            console.log(err)
        }
    })
})
app.put('/edit',(req,response)=>{
    const Word = req.body.Word
    const Meaning = req.body.Meaning
    const image  =req.body.image
    let query = `UPDATE cards.flashcard SET Word = '${Word}', Meaning = '${Meaning}', image = '${image}' WHERE id = ${req.body.id};`
    db.query(query,(err,res)=>{
        if(res){
            console.log(res)
            response.send(res)
        }
        else{
            console.log(err)
        }
    })
})
app.get('/user',(req,response)=>{
    let query = "SELECT * FROM cards.flashcard"
    db.query(query,(err,res)=>{
        if(res){    
            console.log(res)
            response.send(res)
        }
        else{
            console.log(err)
        }
    })
})