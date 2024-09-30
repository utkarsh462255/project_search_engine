const express = require("express");
const searchController = require("./controllers/searchController");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "html");

// Routes
app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/search", searchController.search);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
