import express from "express";
import { sendContactMessage } from "../controller/contactController.js";

const router = express.Router();

router.post("/", sendContactMessage);

export default router;