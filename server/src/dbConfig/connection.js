const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fyp:fyp12345@cluster0.isaht.mongodb.net/e_heath?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("databse connect");
  })
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
