import express from "express";
import dotenv from "dotenv";
import coinRoutes from "./routes/coins.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/coins", coinRoutes);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
