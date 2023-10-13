const express = require("express");
const app = express();
require('./dbConnection');
const Mascota = require('./models/mascota.model');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mascotas", async (req, res) => {
  try {
    const arrayMascotas = await Mascota.find(); // select * from mascotas
    // console.log(arrayMascotas);
    return res.send({
      listaMascotas: "Aquí irán todas las mascotas",
      arrayMascotas
    })
  } catch (error) {
    console.log(error);
  }
});

app.post("/setMascota", async (req, res) => {
  const mascota1 = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  }

  try{
    const nuevaMascota = new Mascota(mascota1);
    nuevaMascota.save();
    res.json({ mensaje: "Mascota cargada correctamente" });
  }
  catch (error){
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`⚡ Example app listening at http://localhost:${port}`);
});