import { gql } from "@apollo/client";

export const QUERY_GET_SINGLE_USER = gql`
    query getSingleUser {
        getSingleUser {
            _id
            username
            email
            password
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    query GetAllProducts {
        getAllProducts {
            _id
            productName
            productDescription
            productPrice
            productCategory {
                categoryName
            }
            onSale
            saleFactor
            salePrice
            imagePath
            quantity
            inStock
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    query GetAllCategories {
        getAllCategories {
            categoryName
            _id
        }
    }
`;
