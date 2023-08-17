const ClientService = require('../Service/Client.service.cjs');

class ClientController {
    static async getAllClients(req, res) {
      try {
        const clients = await ClientService.getAllClients();
        res.status(200).json(clients);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    static async createClient(req, res) {
      const clientData = req.body;
      try {
        const clientId = await ClientService.createClient(clientData);
        res.status(201).json({ message: 'Client created', id: clientId });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
module.exports = ClientController;