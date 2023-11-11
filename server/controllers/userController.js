const UserModel = require('../models/User');

const getUserList = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.json(error);
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findById(id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

const createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.json(error);
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        });
        res.json(user);
    } catch (error) {
        res.json(error);
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await UserModel.findByIdAndDelete(id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    getUserList,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};