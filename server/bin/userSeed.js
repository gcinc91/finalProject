require("dotenv").load();
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const bcryptSalt = 10;

mongoose
  .connect(
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_URL
      : "mongodb://localhost/finalproject",
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

let users = [
  {
    username: "pepe",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "pepe@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "Vue", label: "Vue" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 7
  },
  {
    username: "juan",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "juan@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 5
  },
  {
    username: "toni",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "toni@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 6
  },
  {
    username: "aaron",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "aaron@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "Angular", label: "Angular" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 9
  },
  {
    username: "pedro",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "pedro@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    puntuation: 1
  },
  {
    username: "silvia",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "silvia@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "DHCP", label: "DHCP" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 3
  },
  {
    username: "sandra",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "sandra@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "C", label: "C" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 4
  },
  {
    username: "alicia",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "alicia@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Redux", label: "Redux" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Solaris", label: "Solaris" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 6
  },
  {
    username: "teresa",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "teresa@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Vue", label: "Vue" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 8
  },
  {
    username: "jenny",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "jenny@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "React", label: "React" },
      { value: "Java", label: "Java" },
      { value: "Angular", label: "Angular" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 7
  },
  {
    username: "beatriz",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "beatriz@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "Redux", label: "Redux" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    
    puntuation: 7
  },
  {
    username: "eulalia",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "eulalia@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    selectedOptionDeveloper: [
      { value: "Redux", label: "Redux" },
      { value: "Java", label: "Java" },
      { value: "Kotlin", label: "Kotlin" },
      { value: "Python", label: "Python" }
    ],
    selectedOptionSysAdmin: [
      { value: "AD", label: "AD" },
      { value: "Citrix", label: "Citrix" },
      { value: "Redhat", label: "Redhat" },
      { value: "CentOs", label: "CentOs" },
      { value: "DNS", label: "DNS" }
    ],
    puntuation: 7
  },
  {
    username: "alfondo",
    password: bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt)),
    mail: "alfondo@gmail.com",
    description:'Me encanta programar hacer nuevas actividades y sobre todo las nuevas tecnologias. Mis puntos fuertes son los sistemas operativos en general todos, eso en cuanto a sistemas. En cuanto a programacion domino todo que que viene siendo todo el front y todo el back de todos los lenguajes. Pero remember siempre aprendiendo de los demas.',
    puntuation: 1
  }
];

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
