import express from "express";
import dbInit from "./db/init";


import departmentRouter from "../src/db/routes/route";

const port = 4500

const app = express();

app.use(express.json());
dbInit()
app.use('/',departmentRouter)
app.get('/', (req,res) =>{
    res.send("this is suji");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
