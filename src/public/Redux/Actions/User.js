import axios from 'axios'

export const getEngineer = (username) => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://54.146.201.237:5000/engineer/' + username)
  }
}

export const getCompany = (username) => {
  return {
    type: 'GET_USER',
    payload: axios.get('http://54.146.201.237:5000/company/' + username)
  }
}