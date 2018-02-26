import axios from 'axios'

export const getWords = () => {
  const url = '/api/words'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}