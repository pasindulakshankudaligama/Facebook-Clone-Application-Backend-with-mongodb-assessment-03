const express = require("express");
const app =express();
const router = express.Router();
app.use(express.json())
const req = require("express/lib/request");
const res = require("express/lib/response");
const Item = require('../models/item.models')

router.get('/',async(req,res)=>{
    try {
        const items = await Item.find()
        res.json(items)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router;