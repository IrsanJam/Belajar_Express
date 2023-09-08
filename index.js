const express = require("express");
const app = express();

app.use((request, response) => {
  response.send(`<h1>KONEKSI BERHASIL!!!</h1><p>lanjutkan kawan kita masih belajar express JS perjalanan masih ada</p>`);
});

app.listen(8080, () => {
  console.log("DONE");
});
