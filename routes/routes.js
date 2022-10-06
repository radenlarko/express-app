import express from "express";

import { Home, About } from "../controllers/page.js";

const router = express.Router();

router.get("/", Home);

router.post("/about", About);

export default router;
