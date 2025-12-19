const express = require("express");

const PORT  = process.env.PORT || 8000;
const app = express();

app.get('/', (_request, response) => {
  response.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
