const router = require("express").Router();
const User = require("../models/User");

//register
router.post("/register", async (req, res) => {
    const user = new User({
        username:"Anojan",
        email:"anojan@mail.com",
        password:"1234"
    })

    await user.save();
    res.send("ok")
});

module.exports = router