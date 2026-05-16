import prisma from "../lib/prisma.js";

export const createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = await prisma.article.create({
      data: { title, content },
    });

    res.status(201).json({
      succes: true,
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      message: error.message,
    });
  }
};

export const getArticle = async (req, res) => {
  try {
    const articles = await prisma.article.findMany();
    res.json({ success: true, count: articles.length, data: articles });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await prisma.article.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json({ success: true, data: article });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ success: false, message: "찾을 수 없습니다" });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteAritcle = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.article.delete({
      where: { id: parseInt(id) },
    });
    res.json({ success: true, message: "삭제되었습니다" });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ success: false, message: "찾을 수 없습니다" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};
