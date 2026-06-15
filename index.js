const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// THE KILLSWITCH VARIABLE
// Set to true to allow frontend-backend connection
// Set to false to disable frontend-backend connection
const IS_BACKEND_ACTIVE = true;

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
