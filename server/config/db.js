const mongoose = require('mongoose');
const connectDb = async () => {
  try {
     await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = connectDb;
