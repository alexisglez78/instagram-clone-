// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.json({
            error: true,
            mensaje: 'please add all the fields '
        })
    }
    User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.json({
                error: true,
                mensaje: 'user already exist whit that email'
            })
        }
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
                const user = new User({
                    email,
                    password : hashedPassword,
                    name
                })
                user.save().then(user => {
                    res.json({
                        error: false,
                        message: 'saved successfully'
                    })
                }).catch(error => {
                    console.log(error)
                })

            })
    })
        .catch(err => {
            console.log(err)
        })
    // return res.json({
    //     error: false,
    //     message: 'data send successfully'
    // })
})

module.exports = router