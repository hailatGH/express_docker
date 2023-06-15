// Main imports
const express = require('express')
const cors = require("cors");

// Custom file imports
const initRoutes = require("./routes");

// Initialize express app
const app = express()

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
        allowedHeaders: ["Content-Type"],
    })
);

// Routes
initRoutes(app);

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})