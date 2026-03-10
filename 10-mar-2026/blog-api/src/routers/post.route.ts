import { Router } from "express";
import * as postController from "../controllers/post.controller";

const router = Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);

export default router;
