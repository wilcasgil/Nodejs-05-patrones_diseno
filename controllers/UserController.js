const User = require('../models/User');

const users = [];

const UserController = {
    createUser: (req, res) => {
        const { id, name, email } = req.body;
        const user = new User(id, name, email);
        users.push(user);
        res.status(201).json({ message: 'Usuario creado exitosamente', user });
    },

    getAllUsers: (req, res) => {
        res.json(users);
    }

    // add los demas metodos
};

module.exports = UserController;
