const express = require("express");
const path = require("path");

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route - Dog API
app.use("/api", require("./api"));

// Serving static files
app.use(express.static(path.join(__dirname, "..", "public")));

// Requests with extensions (.js .ccs etc.) sending 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not Found");
    err.code = 404;
    next(err);
  } else {
    next();
  }
});

// Wildcard-base sends index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// Error handling end
app.use((err, req, res, next) => {
  res.status(err.code || 500).send(err.message || "Internal server error.");
});

module.exports = app;
