const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


router.get('/allpost', (req, res) => {
    Post.find()
        .populate("postedBy", "_id name")
        .then(posts => {
            res.json({
                error: false,
                posts: posts
            })
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/createpost', requireLogin, (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        res.status(422).json({
            error: true,
            message: 'please add all the fields'
        })
    }

    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then(result => {
        res.json({
            post: result
        })
    })
        .catch(err => {
            console.log(err)
        })
})

router.get('/mypost',requireLogin, (req, res) => {
    console.log(req.user)
    Post.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then(myPost => {
            res.json({
                error: false,
                post: myPost
            })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router