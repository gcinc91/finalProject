require('dotenv').load();
require("dotenv").config();
const mongoose = require("mongoose");
const Review = require("../models/Review");

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

let reviews = [
  {
    username: "patricia",
    id_user_profesor: "",
    rating: 6,
  },
  {
    username: "alice",
    id_user_profesor: "5c06d6125ef77c07aa3ddcab",
    rating: 9,
  }
];

Review.deleteMany()
  .then(() => {
    return Review.create(reviews);
  })
  .then(reviewsCreated => {
    console.log(`${reviewsCreated.length} reviews created with the following id:`);
    console.log(reviewsCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });