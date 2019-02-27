require('dotenv').load();
require('dotenv').config();
const mongoose = require("mongoose");
const Clase = require("../models/Clase");

mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let clases = [
  {
    name: 'Clase de programacion',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal.. ",
    capacity: 1,
    date: new Date(2019, 7, 7, 17, 0),
  },
  {
    name: 'Clase de programacion 2',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal..2 ",
    capacity: 2,
    date: new Date(2019, 6, 7, 17, 0),
  },
  {
    name: 'Clase de programacion 3',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal.. 3",
    capacity: 3,
    date: new Date(2019, 5, 7, 17, 0),
  },
  {
    name: 'Clase de programacion 4',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal..4 ",
    capacity: 4,
    date: new Date(2019, 4, 7, 17, 0),
  },
  {
    name: 'Clase de programacion 5',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal.. 5",
    capacity: 5,
    date: new Date(2019, 3, 7, 17, 0),
  },
  {
    name: 'Clase de programacion 6',
    id_user_profesor: "",
    description: "Que es la programacion, podemos hacernos camisetas tal..6 ",
    capacity: 6,
    date: new Date(2019, 2, 7, 17, 0),
  },
];

Clase.deleteMany()
  .then(() => {
    return Clase.create(Clases);
  })
  .then(ClasesCreated => {
    console.log(
      `${ClasesCreated.length} Clases created with the following id:`
    );
    console.log(ClasesCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });