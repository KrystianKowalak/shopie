require("dotenv").config();
const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    console.log(process.env);
    
    try {
      const { data } = jwt.verify(token, process.env.secret, { maxAge: process.env.expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, process.env.secret, { expiresIn: process.env.expiration });
  },
};