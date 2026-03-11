import express from "express";
import userRouter from "./routers/user.route";
import postRouter from "./routers/post.route";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // blog web
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
