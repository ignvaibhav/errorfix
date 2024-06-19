const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    
    //check if user exists
    await Admin.create({
        username: username,
        password: password
    }).then((user) => {
    res.json({
        message: "Admin created successfully"
    })}).catch((err)=> {
        res.json({
            message: "shit happened..."
        })
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;