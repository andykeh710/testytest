var axios = require('axios');
//import axios from 'axios'
var data = '';

var config = {
  method: 'get',
  url: 'https://frogsforever-bd829-default-rtdb.firebaseio.com/.json',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
