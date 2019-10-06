const express = require("express")
const router = new express.Router()
const auth = require("../middleware/auth")
const Task = require("../models/task");

router.get("/tasks", auth, async (req, res) => {

    try {
        await req.user.populate("tasks").execPopulate()
        res.send(req.user.tasks);
    } catch (e) {
        res.status(500).send(e)
    }
});

router.get("/tasks/:id", auth, async (req, res) => {

    try {
        //const task = await Task.findById(req.params.id)

        const task = await Task.findOne({_id, owner: req.user._id});

        if (!task) return res.status(404).send();
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
});

router.post("/tasks", auth, async (req, res) => {

    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    try {
        await task.save()
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.patch("/tasks/:id", auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const isValidUpdates = updates.every( update => allowedUpdates.includes(update) )

    if(!isValidUpdates) {
        return res.status(400).send({"error": "Invalid updates"})
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })

        if(!task) return res.status(404).send()

        updates.forEach( update => { return task[update] = req.body[update]} )

        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e.message)
    }

} )

router.delete("/tasks/:id", async (req, res) => {

    try {
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!task) return res.status(404)

        res.status(200).send(task);
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router