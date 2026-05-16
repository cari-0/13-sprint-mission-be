import express from "express";
import dotenv from "dotenv";
import {
  createArticle,
  deleteAritcle,
  getArticle,
  getArticles,
  updateArticle,
} from "./controller/article.controller.js";
import dns from "dns";
import {
  createArticleComment,
  deleteArticleComment,
  getArticleComments,
  updateArticleComment,
} from "./controller/articlecomment.controller.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/articles", createArticle);
app.get("/articles", getArticle);
app.patch("/articles/:id", updateArticle);
app.delete("/articles/:id", deleteAritcle);
app.get("/article", getArticles);

app.post("/articles/:articleId/comments", createArticleComment);
app.get("/articles/:articleId/comments", getArticleComments);
app.patch("/article-comments/:id", updateArticleComment);
app.delete("/article-comments/:id", deleteArticleComment);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
