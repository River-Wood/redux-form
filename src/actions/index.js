// export function selectBook(book) {
//     console.log('A book has been selected', book.title);
//     return {
//         type : 'BOOK_SELECTED',
//         payload : book
//     };
// }
import axios from 'axios';

export const FETCH_POST = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=kinnon123'

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type : FETCH_POST,
        payload : request
    };
}