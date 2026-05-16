import prisma from "../lib/prisma.js";

// 자유게시판 댓글 등록
export const createArticleComment = async (req, res) => {
  try {
    const { articleId } = req.params;
    const { content } = req.body;

    const comment = await prisma.articleComment.create({
      data: {
        content,
        articleId: parseInt(articleId),
      },
    });

    res.status(201).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 자유게시판 댓글 수정
export const updateArticleComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const comment = await prisma.articleComment.update({
      where: {
        id: parseInt(id),
      },
      data: {
        content,
      },
    });

    res.status(200).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "댓글을 찾을 수 없습니다",
      });
    }

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// 자유게시판 댓글 삭제
export const deleteArticleComment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.articleComment.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(200).json({
      success: true,
      message: "댓글이 삭제되었습니다",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        success: false,
        message: "댓글을 찾을 수 없습니다",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 자유게시판 댓글 목록 조회 (cursor pagination)
export const getArticleComments = async (req, res) => {
  try {
    const { articleId } = req.params;

    const cursor = req.query.cursor ? parseInt(req.query.cursor) : undefined;

    const limit = parseInt(req.query.limit) || 10;

    const comments = await prisma.articleComment.findMany({
      where: {
        articleId: parseInt(articleId),
      },

      select: {
        id: true,
        content: true,
        createdAt: true,
      },

      orderBy: {
        id: "desc",
      },

      take: limit,

      skip: cursor ? 1 : 0,

      cursor: cursor
        ? {
            id: cursor,
          }
        : undefined,
    });

    const nextCursor =
      comments.length === limit ? comments[comments.length - 1].id : null;

    res.status(200).json({
      success: true,
      data: comments,
      nextCursor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
