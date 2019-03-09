const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const uploadCloud = require("../configs/cloudinary.js");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

let loginPromise = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, e => e? reject(e):resolve(user))
  })
}

router.post("/login", (req, res, next) => {
  passport.authenticate("local",(err, theUser, failureDetails) => {
    if (err) return res.status(500).json({ message: 'Something went wrong' });
    if (!theUser) return res.json({ message: "usuario o contraseña incorrecta" });
    loginPromise(req, theUser)
      .then(() => res.status(200).json(req.user))
      .catch(e => res.status(500).json({ message: e.message }));
  })(req,res,next)

});



router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const mail = req.body.mail;
  const description = req.body.description;
  const selectedOptionDeveloper = req.body.selectedOptionDeveloper;
  const selectedOptionSysAdmin = req.body.selectedOptionSysAdmin;
  const imgPath = req.body.selectedOptionSysAdmin.imgPath;
  

  if (username === "" || password === "") {
    res.json({ message: "Indica usuario y contraseña" });
    return;
  }

  if (mail === "") {
    res.json({ message: "tienes que poner un correo electronico" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      return res.json({ message: "El usuario ya existe" });
    }
    

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      mail,
      description,
      selectedOptionDeveloper,
      selectedOptionSysAdmin,
      imgPath
    });
    
    newUser.save()
    .then(user => loginPromise(req, user).then(user => res.json({user})))
    .catch(err => {console.log('esto es lo q pasa ' + err)})
  });
});

router.get("/auth/loggedin", (req, res) => {
  const {user} = req;
  if(user){
    res.json({succes: "OK", user})
  }else{
    res.status(401).json({succes: "NO USER LOGGED IN"})
  }
});


router.get("/logout", (req, res) => {
  req.logout();
  res.json({succes:"Done"});
});

router.post("/image", uploadCloud.single("photo"), (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, {imgPath:req.file.url }, {new:true} ).then(user => res.json(user))
});

module.exports = router;