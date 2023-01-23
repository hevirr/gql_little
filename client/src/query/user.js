import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
      posts {
        title
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

// export const GET_ALL_USERS = gql`
//   query getAllUsers {
//     user {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
