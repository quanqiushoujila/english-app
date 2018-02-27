import axios from 'axios'

export const getWords = () => {
  const url = '/api/words'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export const getWord = (word) => {
  const url = '/api/word'
  const data = {
    kw: word
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export const getImage = (word) => {
  const url = '/api/image'
  const data = {
    tn: 'resultjson_com',
    ipn: 'rj',
    ct: 201326592,
    fp: 'result',
    queryWord: word,
    st: -1,
    ic: 0,
    cl: 2,
    lm: -1,
    ie: 'utf-8',
    oe: 'utf-8',
    word: word,
    face: 0,
    istype: 2,
    nc: 1,
    pn: 30,
    rn: 30,
    gsm: '1e'
  }

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve()
  })
}
