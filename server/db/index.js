const { connect } = require("mongoose");
const { config } = require("dotenv");

config();

async function connectToDatabase() {
  try {
    await connect(process.env.MONGO_URI).then(() =>
      console.log("Connect to MongoDB")
    );
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to MongoDB");
  }
}

module.exports = connectToDatabase;
