const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Query String Handling
app.get('/get', (req, res) => {
  console.log('Received query string:', req.query);
  res.send('Query string received!');
});

// Error Handling
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Starting the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});