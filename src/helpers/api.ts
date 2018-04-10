import axios from 'axios'

const baseUrl = "http://localhost:9090/"

export default (url: String, body: any = {}) => {

  const config = { headers: { 'cache-control': 'no-cache' } };

  return axios.get(baseUrl + url)
  .then(function (response) {
     return response.data
  })
  .catch(function (error) {
      return error
  });
}
