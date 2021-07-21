const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Route
app.use("/api", require("./api"));

app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname, "../public/index.html");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.
  http://localhost:${PORT}/
  `);
});
