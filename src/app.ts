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

// Error middleware (centralized)
// app.use(errorHandler);

export default app;
