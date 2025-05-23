
// server.js - CMIS Backend Starter
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.send('CMIS backend is healthy');
});

app.listen(port, () => {
  console.log(`CMIS backend running on port ${port}`);
});
