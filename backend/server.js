import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

// Load env
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: envFile });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? "*"
    : ["http://localhost:5173", "http://localhost:5000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins === "*" || allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(
        new Error(
          "The CORS policy for this site does not allow access from the specified Origin."
        ),
        false
      );
    },
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api/contact", contactRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "dist");
  app.use(express.static(frontendPath));

  // Catch-all for SPA
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`📧 Email user: ${process.env.EMAIL_USER}`);
});