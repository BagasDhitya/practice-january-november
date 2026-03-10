import express from "express";
import userRouter from "./routers/user.route";
import postRouter from "./routers/post.route";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
