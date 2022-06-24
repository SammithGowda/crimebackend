const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://CrimeCheck:CrimeCheck@cluster0.krbfc.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
