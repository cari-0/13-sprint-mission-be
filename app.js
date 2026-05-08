import express from "express";

// 1. Express 앱 만들기
const app = express();

// 2. 포트 번호 설정 (서버가 열릴 문 번호)
const PORT = 3000;

// 3. 기본 라우트 (루트 경로 접속 시)
app.get("/", (req, res) => {
  res.send("서버가 잘 동작하고 있어요! 🎉");
});

// 4. 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중이에요!`);
});
