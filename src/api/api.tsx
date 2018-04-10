const axios = require('axios')


export default (url:any, body:any = {}) => {
  const baseUrl = "test"

  const config = { headers: { 'cache-control': 'no-cache' } };

  return axios.get(baseUrl + url)
  .then(function (response:any) {
    console.log(response);
  })
  .catch(function (error:Error) {
    console.log(error);
  });

}
