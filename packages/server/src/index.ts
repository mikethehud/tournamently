import express from "express";
import cors from "cors";
const app: express.Application = express();
const port = 3001;

// Use cors package to allow localhost:3000
app.use(cors());

app.get("/api/", (req, res) => res.json({ message: "hello mike" }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
