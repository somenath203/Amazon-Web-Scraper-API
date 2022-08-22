require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');


const scrapRoutes = require('./routes/scrapRouter');

const app = express();


app.use(express.json());

app.use(express.static('./public'));

app.set('trust proxy', 1);
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(helmet());
app.use(cors());
app.use(xss());


app.get('/', (req, res) => {

    res.status(200).sendFile('index.html');

});


app.use('/api/v1', scrapRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`server running on PORT ${PORT}`);

});