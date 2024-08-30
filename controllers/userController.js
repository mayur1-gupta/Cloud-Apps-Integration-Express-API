const CloudApp1Service = require('../services/cloudApp1Service');

class UserController {
    constructor() {
        this.cloudApp1Service = new CloudApp1Service();
    }

    async addUser(req, res) {
        try {
            const user = await this.cloudApp1Service.addUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();