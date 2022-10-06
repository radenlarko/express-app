import express from "express";
import router from "./routes/routes.js";

const app = express();
const port = 4000;

app.use(router);

app.listen(port, () => console.log(`Server Running at http://localhost:${port}`));