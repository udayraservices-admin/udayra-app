const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from wwwroot
app.use(express.static(path.join(__dirname)));

app.get('/api/status', (req, res) => {
  res.json({ status: 'UDAYRA is live', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});