// Create web server
// 1. Import express
// 2. Create express app
// 3. Create express router
// 4. Define route for comments
// 5. Start server

// 1. Import express
const express = require('express');

// 2. Create express app
const app = express();

// 3. Create express router
const router = express.Router();

// 4. Define route for comments
router.get('/comments', (req, res) => {
    res.send('Comments here');
});

// 5. Start server
app.listen(3000, () => {
    console.log('Server started');
});