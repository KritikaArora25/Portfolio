import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);

// Serve React build
const frontendPath = path.join(__dirname, "dist");
app.use(express.static(frontendPath));

// Catch-all route for React Router (v5 safe syntax)
app.get("/:path(.*)", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
