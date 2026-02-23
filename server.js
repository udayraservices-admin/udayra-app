const express = require('express');
const app = express();

// Serve all files in wwwroot (or your project folder)
app.use(express.static(__dirname));

// Default route (optional)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Use process.env.PORT for Azure
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});