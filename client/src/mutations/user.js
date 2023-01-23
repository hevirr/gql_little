import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      id
      username
      age
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
