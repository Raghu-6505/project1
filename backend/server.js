// backend/server.js
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./Contact'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (REQUIRED for POST requests)
app.use(cors()); 
app.use(express.json()); // Allows Express to read JSON body data

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🟢 MongoDB Atlas connected successfully'))
    .catch(err => console.error('🔴 MongoDB connection error:', err));

// API Route: POST Contact Message (This must match your Postman URL: /api/contact)
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'Please enter all fields.' });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ 
            msg: `Thank you, ${name}! Your message has been sent successfully.`,
            contact: newContact 
        });

    } catch (err) {
        console.error('Error saving contact form:', err.message);
        res.status(500).json({ msg: 'Server error. Could not save message.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});