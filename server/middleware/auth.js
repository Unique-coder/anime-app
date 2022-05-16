import jwt, { decode } from "jsonwebtoken";

const auth = async (req, res, next) => {
  if (
    //In http headers, we have authorisations object
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from bearer. split turns it into an array and gets value of position [1] which is token. value of [0] = bearer tag
      const token = await req.headers.authorization.split(" ")[1];

      // If token is less than 500 it is ours else user token is from google auth
      const isCustomAuth = token.length < 500;

      let decodedData;

      // Verify token
      if (token && isCustomAuth) {
        decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Get user from the token
        req.userId = decodedData?.id;
      } else {
        // Verify token from google auth
        decodedData = jwt.decode(token);

        // Get user from the token google auth
        req.userId = decodedData?.sub;
      }

      next();
    } catch (error) {
      console.log(error.message);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
};

export default auth;
