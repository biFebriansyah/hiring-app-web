import axios from 'axios'

export const getUser = (username) => {
  console.log('masuk');
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:4000/engineer/' + username)
  }
}