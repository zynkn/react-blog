import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta => meta);

// initial state
const initialState = Map({
  posts: List(),
  lastPage: null,
});

// reducer
export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;
      // console.log(action.payload);
      console.log(Object.keys(posts));
      console.log(fromJS({
        0: {
          id: '-LCgXGfbr9saSuiYwvEd',
          title: 'First Post',
          body: 'Write Something!'
        },
        1: {
          id: '-LCgXL5X0j0kBkYp1btq',
          title: 'Second Post',
          body: 'Write Anything!'
        }
      }));
      const lastPage = action.payload.headers['last-page'];
      return state.set('posts', fromJS(posts))
        .set('lastPage', lastPage);
    }
  })
}, initialState)