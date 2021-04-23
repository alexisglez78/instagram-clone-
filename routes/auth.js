// const { Router } = require('express')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello')
})
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.json({
            error: true,
            mensaje: 'please add all the fields '
        })
    }
    return res.json({
        error: false,
        message: 'Datos Enviados Correctamente'
    })
})

module.exports = router