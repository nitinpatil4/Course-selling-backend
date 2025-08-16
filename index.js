const express = require("express");
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const app = express();
const port = 3000;

app.use("/user", userRouter);
app.use("/course", courseRouter);

// Home route
app.get('/', (req, res) => {
    res.json({
        requestTime: `Welcome to course App: ${new Date().toLocaleString()}`,
        message: "We provide courses on various topics"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
