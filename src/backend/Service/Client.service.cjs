const Client = require('../Model/Client.model.cjs');

class ClientService {
    static async getAllClients() {
      try {
        const clients = await Client.all();
        return clients;
      } catch (error) {
        throw new Error(`Error fetching clients: ${error.message}`);
      }
    }
  
    static async createClient(clientData) {
      try {
        const clientId = await Client.create(clientData);
        return clientId;
      } catch (error) {
        throw new Error(`Error creating client: ${error.message}`);
      }
    }
  }
  
module.exports = ClientService;