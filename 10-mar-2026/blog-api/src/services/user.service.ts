import { prisma } from "../config/prisma";

export const getUsers = async () => {
  return prisma.user.findMany({
    where: {
      deleted_at: null,
    },
  });
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const updateUser = async (
  id: number,
  data: { name?: string; email?: string; password?: string },
) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const getUserPosts = async (id: number) => {
  return prisma.post.findMany({
    where: { author_id: id },
    include: {
      author: true,
    },
  });
};
