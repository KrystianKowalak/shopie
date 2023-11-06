const { Category, Product, User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
    Query: {
        // User queries
        getSingleUser: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
        getAllUsers: async () => {
            return User.find();
        },
        // Category queries
        getSingleCategory: async (parent, { categoryId }) => {
            return Category.findOne({ _id: categoryId });
        },
        getAllCategories: async () => {
            return Category.find();
        },
        // Product queries
        getSingleProduct: async (parent, { productId }) => {
            return Product.findOne({ _id: productId }).populate(
                "productCategory"
            );
        },
        getAllProducts: async () => {
            return Product.find().populate("productCategory");
        },
    },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    }
  },
};

module.exports = resolvers;
