import express from "express";

const app = express();

const port = 9000;

app.use("/", (req, res) => {
function fetch(){
const result = await axios(`https://randomuser.me/api/`)
console.log(result);
    
}
fetch()
res.send(result)
  // res.json({ message: "Hello Vercel!" });
});

app.listen(9000, async() => {
     
  console.log(`Server is running on Port ${port}`);
});

