const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get('/api', (req, res) => {
  res.json(`HTTP GET request received`);
})


app.use(function(req, res) {
  res.status(400);
  return res.send(`404 Error: Resource not found`);
});

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
});