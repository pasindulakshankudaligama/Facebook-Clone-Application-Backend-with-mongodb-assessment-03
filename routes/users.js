const express = require('express')
const app = express()
const router = express.Router()

const Users = require('../models/users.models')
const User = require("../models/users.models");
app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.json(users)
    } catch (err) {
        res.send("Err : " + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send('Err : ' + err)
    }
})


module.exports = router