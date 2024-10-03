const UserService = require("../service/Users");

class UsersControllers {
  constructor(userService) {
    this.userService = userService; // Dependency injected
  }

  async Get(req, res) {
    const getUsers = await this.userService.getAllUsers();
    return res.status(200).json({ data: getUsers, message: "success" });
  }

  async Post(req, res) {
    const { name, email } = req.body;
    try {
      const user = await this.userService.createUser({ name, email });
      return res
        .status(201)
        .json({ data: user, message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "error", error: error.message });
    }
  }

  async GetById(req, res) {
    try {
      const { id } = req.params;
      const getUser = await this.userService.getUserById(id);
      return res.status(200).json({ data: getUser, message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "error", error: error.message });
    }
  }

  async Put(req, res) {
    try {
      const { id } = req.params;
      const { name, email } = req.body;
      const updateUser = await this.userService.PutUser({ id, name, email });
      return res.status(200).json({ data: updateUser, message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "error", error: error.message });
    }
  }

  async Delete(req, res) {
    try {
      const { id } = req.params;
      const deleteUser = await this.userService.deleteUser(id);
      return res.status(200).json({ data: deleteUser, message: "success" });
    } catch (error) {
      return res.status(500).json({ message: "error", error: error.message });
    }
  }
}

// Menginisialisasi userService dan menginject ke dalam Users class
const userService = new UserService(); // Misal userService mengelola logika database
module.exports = new UsersControllers(userService);
