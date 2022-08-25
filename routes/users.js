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

router.post('/', async (req, res) => {
    const users = await new Users({
        firstName: req.body.firstName,
        sureName: req.body.sureName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
    })

    try {
        const response = await users.save();
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        user.firstName = req.body.firstName
        user.sureName = req.body.sureName
        user.gender = req.body.gender
        user.dateOfBirth = req.body.dateOfBirth
        user.password = req.body.password
        user.phoneNumber = req.body.phoneNumber
        user.email = req.body.email

        const response = await user.save()
        res.json(response)

    } catch (err) {
        res.send('Err : ' + err)
    }
})



module.exports = router