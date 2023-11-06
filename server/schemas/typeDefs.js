const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Category {
    _id: ID
    categoryName: String
  }
  type Product {
    _id: ID
    productName: String
    productDescription: String
    productPrice: Float
    productCategory: Category
    onSale: Boolean
    saleFactor: Float
    salePrice: Float
    imageSrc: String
    imagePath: String
    quantity: Int
    inStock: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser: User
    getAllUsers: [User]
    getSingleCategory(categoryId: ID!): Category
    getAllCategories: [Category]
    getSingleProduct(productId: ID!): Product
    getAllProducts: [Product]
  }


  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createCategory(categoryName: String!): Category
    updateCategory(categoryId: ID!, categoryName: String!): Category
    deleteCategory(categoryId: ID!): Category
    createProduct(productName: String!, productDescription: String!, productPrice: Float!, productCategory: ID!,onSale: Boolean,saleFactor: Float, imageSrc: String!): Product
    updateProduct(productId: ID!, productName: String!, productDescription: String!, productPrice: Float!, productCategory: ID!): Product
    deleteProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
