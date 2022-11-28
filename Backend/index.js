const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')

app.use(cors())

mongoose.connect(`mongodb+srv://admin:381183@cluster0.t6tppwb.mongodb.net/?retryWrites=true&w=majority`,
   { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
   console.log("Successfully connect to MongoDB.");
})
   .catch(err => {
      console.error("Connection error", err);
      process.exit();
   });

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Porta 3333")
})