const { connect } = require("mongoose");
const { config } = require("dotenv");

config();

async function connectToDatabase() {
  try {
    await connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to MongoDB");
  }
}

module.exports = connectToDatabase;
