const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./routes/user');

dotenv.config({path: './config/.env'});
const port = process.env.port;

// express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRouter);

app.get('/', (req, res) => {
    res.json({message: 'hello...'});
});

app.listen(port, ()=>{ console.log(`server is running on http://localhost:${port}`); });