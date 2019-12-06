import axios from 'axios'

export const getEngineer = (username) => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:4000/engineer/' + username)
  }
}

export const getCompany = (username) => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:4000/company/' + username)
  }
}