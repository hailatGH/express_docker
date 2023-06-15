module.exports = {
  // Home route handler
  home: async (req, res) => {
    return res.status(201).json({"message": "Hello World Hailemichael"});
  }
};