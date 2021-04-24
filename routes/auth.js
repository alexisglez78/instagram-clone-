// const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/protected', requireLogin, (req, resp) => {
    console.log('entro')
    resp.send("hello user ")
})

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
                    password: hashedPassword,
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

})

router.post('/signIn', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({
            error: true,
            message: 'please add email or password'
        })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({
                    error: true,
                    message: 'Invalid Email or password'
                })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({
                            id: savedUser._id
                        }, JWT_SECRET)
                        res.json({
                            error: false,
                            token: token
                        })
                        // res.json({
                        //     error: false,
                        //     message: 'successfully signed in '
                        // })

                    } else {
                        return res.status(422).json({
                            error: true,
                            message: 'Invalid Email or password'
                        })
                    }
                })
                .catch(err => {
                    console.log(error)
                })
        })
})

module.exports = router