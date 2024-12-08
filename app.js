import express from 'express';
import { allroute } from './routes/route.js';
import dbConnect from './database/dbconfig.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize dotenv for environment variables
dotenv.config();

// Set up __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database Connection
dbConnect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs'); // Set view engine to EJS

// Routes
app.use("/", allroute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
