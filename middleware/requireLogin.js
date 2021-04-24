const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../keys')
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req, resp, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return resp.status(401).json({
            error: true,
            message: 'you must be logged in '
        })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        console.log(token)
        if (err) {
            return resp.status(401).json({
                error: true,
                message: 'you must be logged in '
            })
        }
        const { _id } = payload
        User.findById(_id).then(userData => {
            req.user = userData
        })

        next()
    })

}