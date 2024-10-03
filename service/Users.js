const { User } = require("../models");

class UserService {
  // Mendapatkan semua user dari database
  async getAllUsers() {
    return await User.findAll();
  }

  // Membuat user baru di database
  async createUser({ name, email }) {
    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) {
      throw new Error("User already exists");
    }
    return await User.create({ name, email });
  }

  // Mendapatkan user berdasarkan ID
  async getUserById(id) {
    const existingUser = await User.findOne({ where: { id } });
    if (!existingUser) {
      throw new Error("User not found");
    }
    return await User.findByPk(id);
  }

  // Mengupdate user berdasarkan ID
  async PutUser({ id, name, email }) {
    const existingUser = await User.findOne({ where: { id } });
    const existingName = await User.findOne({ where: { name } });
    if (!existingUser) {
      throw new Error("User not found");
    } else if (existingName) {
      throw new Error("name already exists");
    }
    return await User.update({ name, email }, { where: { id } });
  }

  // Menghapus user berdasarkan ID
  async deleteUser(id) {
    const existingUser = await User.findOne({ where: { id } });
    if (!existingUser) {
      throw new Error("User not found");
    }
    return await User.destroy({ where: { id } });
  }
}

module.exports = UserService;
