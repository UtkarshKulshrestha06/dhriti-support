require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// THE KILLSWITCH VARIABLE
// Default to true if not specified in .env to prevent accidental downtime
const IS_BACKEND_ACTIVE = process.env.IS_BACKEND_ACTIVE === 'false' ? false : true;


app.get('/status', (req, res) => {
    res.json({
        active: IS_BACKEND_ACTIVE
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Killswitch service running on port ${PORT}`);
    console.log(`Current status: IS_BACKEND_ACTIVE = ${IS_BACKEND_ACTIVE}`);
});
