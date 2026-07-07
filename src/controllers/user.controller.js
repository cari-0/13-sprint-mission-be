import prisma from "../../prisma/seed.js";

export const getMe = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  });

  res.json(user);
};

export const updateMe = async (req, res) => {
  const { nickname, image } = req.body;

  const user = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      nickname,
      image,
    },
  });

  res.json(user);
};

export const updateMePassword = (req, res) => {
  res.json({ message: "비밀번호 변경" });
};

export const getMeProducts = (req, res) => {
  res.json({ message: "내 상품 조회" });
};

export const getMeFavorites = (req, res) => {
  res.json({ message: "내 관심상품 조회" });
};
