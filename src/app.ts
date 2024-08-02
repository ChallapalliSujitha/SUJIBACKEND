import express from "express";
import dbInit from "./db/init";

import routes from "./db/routes/route";

const port = 2406

const app = express();

app.use(express.json());
dbInit()
app.use('/',routes)
app.get('/', (req,res) =>{
    res.send("this is navven");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });