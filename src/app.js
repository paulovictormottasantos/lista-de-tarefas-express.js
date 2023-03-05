const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (request, response) => {
  response.json({ hello: 'world.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});