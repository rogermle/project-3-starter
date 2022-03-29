const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, ()=>{
    console.log("App is listening on: http://localhost:" + PORT)
})