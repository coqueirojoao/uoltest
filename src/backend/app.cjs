const express = require('express');
const { config } = require('dotenv');
const ClientController = require('./Controller/Client.controller.cjs');

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/clients', ClientController.getAllClients);
app.post('/clients', ClientController.createClient);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
