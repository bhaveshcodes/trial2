import express from "express";

const app = express();

const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "Hello @Vercel" });
});

app.listen(9000, async() => {
    // const result = await axios(`https://randomuser.me/api/`)
    // console.log(result);
  console.log(`Server is running on Port ${port}`);
});

