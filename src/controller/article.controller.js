import prisma from "../lib/prisma.js";

export const createAticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = await prisma.article.create({
      data: { title, content },
    });
  } catch {}
};
