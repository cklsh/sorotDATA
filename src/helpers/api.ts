import axios from 'axios'

const baseUrl = "http://localhost:9090/"

export default (url: String, body: any = {}) => {

  const config = { headers: { 'cache-control': 'no-cache' } };

  return axios.get(baseUrl + url)
  .then((response) => {
     return response.data
  })
  .catch(function (error) {
      return error
  });
}
//
//
// const axios = require('axios')
//
//
// export default (url:any, body:any = {}) => {
//   const baseUrl = "http://localhost:9090/getByCategory/Umum"
//
//   const config = { headers: { 'cache-control': 'no-cache' } };
//
//   return axios.get(baseUrl + url)
//   .then(function (response:any) {
//     console.log(response);
//   })
//   .catch(function (error:Error) {
//     console.log(error);
//   });
//
// }
