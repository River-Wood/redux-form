import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import PostReducer from './reducer_posts';
const rootReducer = combineReducers({
  // state: (state = {}) => state
  books :  BooksReducer,
  activeBook : ActiveBook,
  posts : PostReducer
});

export default rootReducer;
