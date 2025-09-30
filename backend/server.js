import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

// ✅ Load appropriate .env file based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ CORS configuration - dynamic origins
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? '*'
  : ['http://localhost:5173', 'http://localhost:5000'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, mobile apps)
    if (!origin) return callback(null, true);

    // In production, allow all
    if (allowedOrigins === '*' || allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }

    const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
    return callback(new Error(msg), false);
  },
  credentials: true
}));


app.use(express.json());

// ✅ API Routes
app.use("/api/contact", contactRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, "dist");
  app.use(express.static(frontendPath));
  
 

  // ✅ Catch-all route for SPA routing (should come after specific routes)
  app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});


}

// ✅ Error handling middleware (should be after all routes)
app.use(errorHandler);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`📧 Email user: ${process.env.EMAIL_USER}`);
});