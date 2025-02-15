const express = require('express');
const router = express.Router();
const db = require('../db');

// POST route for user registration
router.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Insert user into the database
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error', error });
        }
        res.status(201).json({ message: 'User registered successfully', userId: results.insertId });
    });
});

module.exports = router;