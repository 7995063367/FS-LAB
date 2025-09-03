const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/register', (req, res) => {
  console.log("Received registration:");
  console.log(req.body);
  res.send("<h2>Registration Successful!</h2><p>Check the server console for submitted data.</p>");
});
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

