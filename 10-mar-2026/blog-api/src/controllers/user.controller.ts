import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(Number(req.params.id));
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await userService.updateUser(Number(req.params.id), req.body);

  res.json(user);
};

export const getUserPosts = async (req: Request, res: Response) => {
  const posts = await userService.getUserPosts(Number(req.params.id));
  res.json(posts);
};
