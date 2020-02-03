import { gql } from "apollo-boost";

export const GET_USER = gql`
  query GetUser($uuid: Int, $username: String) {
    user(uuid: $uuid, username: $username) {
      uuid
      username
      fname
      surname
      isVerified
      profilePic
      email
      password
    }
  }
`;

// export const GET_USER_EVENTS = gql`
//   query user(uuid: Int, username: String) {
//     // wip
//   }
// `;

export const ALL_USERS = gql`
  query AllUsers(
    $sort: [UserSortEnum]
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    allUsers(
      sort: $sort
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      edges {
        node {
          uuid
          username
          email
          profilePic
          fname
          surname
          isVerified
        }
      }
    }
  }
`;

export const ALL_EVENTS = gql`
    query AllEvents(
      sort: [EventSortEnum]
      before: String
      after: String
      first: Int
      last: Int
    ) {
      uuid
      title
      datePosted
      location
      description
      organizerUuid
      organizer
      joinedUsers
    }
`;