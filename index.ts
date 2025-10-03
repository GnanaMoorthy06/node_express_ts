// import dotenv from "dotenv";
// import * as app from "./src/app.ts";
// import connectDB from "./src/config/db.js";
import express, { Application, Request, Response } from "express";
// import userRoutes from "./routes/user.routes.js";
// import { errorHandler } from "./middlewares/error.middleware.js";

const app: Application = express();

app.use(express.json());

// API Routes
// app.use("/api/users", userRoutes);

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Express + TypeScript + PostgreSQL API is healthy!");
});
// dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    // await connectDB();
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start server:", (err as Error).message);
    process.exit(1);
  }
})();
