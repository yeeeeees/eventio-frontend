import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(
      email: $email
      password: $password
    ) {
      message
      success
      accessToken
      refreshToken
      user {
        uuid
        username
        fname
        surname
        profilePic
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $email: String!
    $fname: String!
    $password: String!
    $surname: String!
    $username: String!
  ) {
    createUser(
      email: $email
      fname: $fname
      password: $password
      surname: $surname
      username: $username
    ) {
      success
      message
      user {
        uuid
        username
        fname
        surname
        profilePic
        email
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($uuid: Int!) {
    DeleteUser (
      uuid: $uuid
    ) {
      success
      message
    }
  }
`;

