/* eslint-disable import/no-anonymous-default-export */

import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

// // Post Reducer action function before adding pagination.
// export default (posts = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;
//     case FETCH_BY_SEARCH:
//       return action.payload;
//     case CREATE:
//       return [...posts, action.payload];
//     case UPDATE:
//       return posts.map((post) =>
//         post._id === action.payload._id ? action.payload : post
//       );
//     case LIKE:
//       return posts.map((post) =>
//         post._id === action.payload._id ? action.payload : post
//       );
//     case DELETE:
//       return posts.filter((post) => post._id !== action.payload);
//     default:
//       return posts;
//   }
// };

export default (state = [], action) => {
  switch (action.type) {
    // // FETCH ALL Reducer function before pagination
    // case FETCH_ALL:
    //   return action.payload;

    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };

    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case CREATE:
      return [...state, action.payload];

    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
