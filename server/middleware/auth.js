import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500 || token;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "Unique");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch {
    console.log(error);
  }
};

export default auth;
