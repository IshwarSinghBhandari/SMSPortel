import express from 'express';
import { allroute } from './routes/route.js';
import dbConnect from './database/dbconfig.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dbConnect()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Database connection error:', err));


const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs');

// Routes
app.use("/", allroute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
