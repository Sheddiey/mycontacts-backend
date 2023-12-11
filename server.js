const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorhandler)

app.listen(port , () => {
  console.log(`Server running on port ${port}`)
})