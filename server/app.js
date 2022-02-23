const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRouter = require("./routes/index.js");

dotenv.config();

const app = express();
const {PORT} = process.env;
const port = PORT || 4000;
const corsOption = {
    orgin: `http://localhost:${port}`,
    credentials: true
}

app.use(express.json());
app.use(cors(corsOption));
app.use('/', indexRouter);

app.listen(3000, function(){
    console.log(`Express server starting on port ${port}`);
});