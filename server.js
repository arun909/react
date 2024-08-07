const express = require('express'); 
const connectDB = require('./config/db');
const app = express(); 

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();



// Define a simple route
app.get('/', (req, res) => res.send('API running'));

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));