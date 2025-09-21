import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// ✅ Needed for ES modules (__dirname fix)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(cors()); // Since frontend + backend on same domain, you can even remove CORS later
app.use(express.json());

// ✅ API Routes
app.use("/api/contact", contactRoutes);

// ✅ Serve frontend (React/Vite build)
// Place the build folder (`dist`) inside your backend root
const frontendPath = path.join(__dirname, "dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(frontendPath, "index.html"));
});

// ✅ Error handling middleware
app.use(errorHandler);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
