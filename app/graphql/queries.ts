import { gql } from "apollo-boost";

export const GET_USER = gql`
  query GetUser($uuid: Int, $username: String) {
    user(uuid: $uuid, username: $username) {
      uuid
      username
      fname
      surname
      profilePic
      email
      password
    }
  }
`;

export const GET_USER_EVENTS = gql`
  query GetEvents($uuid: Int, $username: String) {
    user(uuid: $uuid, username: $username) {
      createdEvents {
        edges {
          node {
            uuid
            title
            datePosted
            eventThumbnail
            location
            description
            organizerUuid
            organizer {
              uuid
              username
              fname
              surname
            }
          }
        }
      }
      joinedEvents {
        edges {
          node {
            uuid
            title
            datePosted
            eventThumbnail
            location
            description
            organizerUuid
            organizer {
              uuid
              username
              fname
              surname
            }
          }
        }
      }
    }
  }
`;

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
        }
      }
    }
  }
`;

export const ALL_EVENTS = gql`
  query AllEvents(
    $sort: [EventSortEnum]
    $before: String
    $after: String
    $first: Int
    $last: Int
  ) {
    allEvents(
      sort: $sort
      before: $before
      after: $after
      first: $first
      last: $last
    ) {
      uuid
      title
      datePosted
      location
      description
      organizerUuid
      organizer {
        uuid
        username
        fname
        surname
      }
      joinedUsers {
        edges {
          node {
            uuid
            username
            fname
            surname
            profilePic
            email
            password
          }
        }
      }
    }
  }
`;

export const SEARCH_EVENTS = gql`
  query SearchEvents($title: String) {
    searchEvents(title: $title) {
      uuid
      title
      datePosted
      location
      description
      organizerUuid
      organizer {
        uuid
        username
        fname
        surname
      }
      joinedUsers {
        edges {
          node {
            uuid
            username
            fname
            surname
            profilePic
            email
            password
          }
        }
      }
    }
  }
`;
