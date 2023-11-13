const UserModel = require('../models/User');

const UserController = {
  // Tüm kullanıcıları getir
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (err) {
      console.error('Kullanıcıları alma hatası', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Kullanıcı ekle
  createUser: async (req, res) => {
    const { name, email, age } = req.body;
    try {
      const newUser = new UserModel({ name, email, age });
      await newUser.save();
      res.json({ message: 'Kullanıcı eklendi.', user: newUser });
    } catch (err) {
      console.error('Kullanıcı oluşturma hatası', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Kullanıcı güncelle
  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { name, email, age } = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(userId, { name, email, age }, { new: true });

      if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
      }

      res.json({ message: 'Kullanıcı güncellendi.', user });
    } catch (err) {
      console.error('Kullanıcı güncelleme hatası', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Kullanıcı sil
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserModel.findByIdAndDelete(userId);

      if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
      }

      res.json({ message: 'Kullanıcı silindi.', user });
    } catch (err) {
      console.error('Kullanıcı silme hatası', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
