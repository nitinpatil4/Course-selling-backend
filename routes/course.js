const express = require('express');
const courseRouter = express.Router();

// Route for course preview
courseRouter.post('/preview', (req, res) => {
    res.json({ message: "Course preview is available" });
});

// Route for course purchase
courseRouter.post('/purchase', (req, res) => {
    res.json({ message: "Course purchased successfully" });
});

module.exports = courseRouter;
