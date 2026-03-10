import { Request, Response } from "express";
import * as postService from "../services/post.service";

export const getPosts = async (_req: Request, res: Response) => {
  const posts = await postService.getPosts();
  res.json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  const post = await postService.getPostById(Number(req.params.id));
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const post = await postService.createPost(req.body);
  res.json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  const post = await postService.updatePost(Number(req.params.id), req.body);

  res.json(post);
};
