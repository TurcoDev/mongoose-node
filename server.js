const express = require("express");
const app = express();
require('./dbConnection');
const Mascota = require('./models/mascota.model');
const Cliente = require('./models/cliente.model');
const Consulta = require('./models/consulta.model');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Clientes
 */

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
    descripcion: req.body.descripcion,
    consultas: [],
    clienteId: req.body.clienteId
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


/**
 * Clientes
 */
app.get("/clientes", async (req, res) => {
  try {
    const arrayClientes = await Cliente.find(); // select * from mascotas
    return res.send({
      arrayClientes
    })
  } catch (error) {
    console.log(error);
  }
});

app.post("/setCliente", async (req, res) => {
  const cliente = {
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    mascotas: req.body.mascotas,
  }

  try{
    const nuevoCliente = new Cliente(cliente);
    nuevoCliente.save();
    res.json({ mensaje: "Cliente cargado correctamente" });
  }
  catch (error){
    console.log(error);
  }
})

/**
 * Clientes
 */
app.get("/consultas", async (req, res) => {
  try {
    const arrayConsultas = await Consulta.find(); // select * from mascotas
    return res.send({
      arrayConsultas
    })
  } catch (error) {
    console.log(error);
  }
});

app.post("/setConsulta", async (req, res) => {
  const consulta = {
    fecha: new Date(),
    motivo: req.body.motivo,
    mascotaId: req.body.mascota,
  }

  try{
    const nuevaConsulta = new Consulta(consulta);
    nuevaConsulta.save();
    res.json({ mensaje: "Consulta cargada correctamente" });
  }
  catch (error){
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`⚡ Example app listening at http://localhost:${port}`);
});