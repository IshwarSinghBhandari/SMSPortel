import express from 'express';
import { allroute } from './routes/route.js';
import dbConnect from './database/dbconfig.js';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
dbConnect().then(()=>console.log('connected')).catch(err=>console.log('err'));

const app = express();
app.use(bodyparser.urlencoded())
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use("/",allroute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
