import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "xyz123", { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};
