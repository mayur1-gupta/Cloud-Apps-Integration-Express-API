const axios = require('axios');

class CloudApp1Service {
    constructor() {
        this.apiKey = process.env.CLOUD_APP1_API_KEY;
        this.baseUrl = 'https://api.cloudapp1.com';
    }
    async addUser(userData) {
        const response = await axios.post(`${this.baseUrl}/users`, userData, {
            headers: { 'Authorization': `Bearer ${this.apiKey}` }
        });
        return response.data;
    }
}

module.exports = CloudApp1Service;