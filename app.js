const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); // Import multer
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware

app.use(express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up multer for handling file uploads
const upload = multer();

// Use multer middleware for handling file uploads
app.use(upload.any()); // This handles all file uploads

// Import route files
const userRoutes = require('./routes/userRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');

// Use route files
app.use(userRoutes);
app.use(authenticationRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
