const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const currentGMT = new Date().toISOString();

    res.send(`Kashif Kahloon - WEB322 ${currentGMT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;