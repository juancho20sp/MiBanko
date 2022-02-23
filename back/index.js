const express = require('express');
const cors = require('cors');

require('dotenv').config();

const router = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

router(app);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})
