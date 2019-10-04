const express = require("express")
const router = new express.Router()

const User = require("../models/user");

router.get("/users", async (req, res) => {

    try{
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get("/users/:id", async (req, res) => {

    try{
        const user = await User.findById( req.params.id )

        if(!user) return res.status(404).send();

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.post("/users", async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

});

router.patch("/users/:id", async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age"]
    const isValidOperation = updates.every( update => {allowedUpdates.includes(update)})

    if(!isValidOperation) {
        return res.status(403).send({error: "Invalid updates!"});
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true})

        if(!user) return res.status(404)

        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})


router.delete("/users/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) return res.status(404)

        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router