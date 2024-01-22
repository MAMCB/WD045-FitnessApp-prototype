const express = require('express');
const app = express();
const PORT= process.env.PORT || 8000;
const cors = require('cors');
require('dotenv').config();
const connectDb = require('./config/db');


app.use(express.json());
app.use(cors());

connectDb().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  });