const express = require("express");
const path = require("path");

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Route - Dog API
app.use("/api", require("./api"));

// Serving static files
app.use(express.static(path.join(__dirname, "../public")));

// Requests with extensions (.js .ccs etc.) sending 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// Wildcard-base sends index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname, "../public/index.html");
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.
  http://localhost:${PORT}/
  `);
});
