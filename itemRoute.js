const express = require('express')
const app = express.Router()
const db = require('../db')

//create
//method get
app.get('/item', (req, res) => {
    res.send(db)
})

//read
//method post
app.post('/item', (req, res) => {
    db.push(req.body)
    res.send(req.body)
})

//update
//method put  cara manggilnya localhost:3000/item/0-dst
app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) {
        res.status(400).send("params should be number")
    }

    else if ((db.length - 1) < Number(index)) { //bisa menambah karena itemsnya dihitung dari 1
        res.status(400).send("params should be equal or less")
    }

    else {
        db[req.params.index] = req.body
        res.send(req.body)
    }

})

//delete
//method delete  cara manggilnya localhost:3000/item/0-dst
app.delete('/item/:index', (req, res) => {
    const deleteItem = db.splice(req.params.index, 1)
    res.send(deleteItem)
})

app.get('/error', (req, res) => {
    testing
})


module.exports = app