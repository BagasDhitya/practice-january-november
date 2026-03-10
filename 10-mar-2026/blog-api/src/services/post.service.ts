import { prisma } from "../config/prisma";

export const getPosts = async () => {
  return prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const getPostById = async (id: number) => {
  return prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
};

export const createPost = async (data: {
  title: string;
  description: string;
  author_id: number;
}) => {
  return prisma.post.create({
    data,
  });
};

export const updatePost = async (
  id: number,
  data: { title?: string; description?: string },
) => {
  return prisma.post.update({
    where: { id },
    data,
  });
};
