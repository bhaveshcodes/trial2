const express = require('express')
const app=express()

const axios=require('axios')

const port = 9000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


app.listen(9000, () => {
      
  console.log(`Server is running on Port ${port}`);
});

app.get("/", (req, res) => {
    fetch1()
 async function fetch1(){
        // const result = await axios('https://randomuser.me/api/')
        // console.log("result2");
        fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) =>  res.json(data));
    }
    
//   res.json({ message: "result" });
});
