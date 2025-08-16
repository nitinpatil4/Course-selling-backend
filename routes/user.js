const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup', (_, res) => {
    res.json({ message: "User signed up successfully" });
});

userRouter.post('/signin', (_, res) => {
    res.json({ message: "User signed in successfully" });
});

userRouter.get('/courses', (_, res) => {
    res.json({ message: "Here are the courses you are enrolled in" });
});

module.exports = userRouter;
