import express from 'express';

const router = express.Router();

router.get("/signup", (req, res) => { 
    res.send("This is Signup endpoint");
})

router.get("/login", (req, res) => {
    res.send("This is Login endpoint");
})

router.get("/logout", (req, res) => {
    res.send("This is Logout endpoint");
})

export default router;