import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/topstories/v2/'
})

api.interceptors.request.use(config => {
  config.params = { 'api-key': 'RAGG9REMGabQ9hJ0ID1JLllLAwToUEx1' }

  return config
})

export default api
