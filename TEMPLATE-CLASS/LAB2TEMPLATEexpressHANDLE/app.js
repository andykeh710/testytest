console.log("Frog")

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
var axios = require('axios');


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        getShortComment(comment) {

            if (comment.length < 64) {
                return comment;
            }
            return comment.substring(0, 61) + '...';
        }
    }
}));

app.set('view engine', 'hbs'); /// method / function 
app.get('/', function (req, res) {
    var data = '';
var config = {
    method: 'post',
    url: 'https://frogsforever-bd829-default-rtdb.firebaseio.com/.json',
    headers: { },
    data : data
  };
  console.log("This is working")
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    var tempObj = JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
  
    res.render('home', { /// home HB template 

        
        posts:  [  // eg. 
            {
                author: 'Janith Kasun',
                image: 'https://picsum.photos/500/500',
                frogData: `${tempObj}`,
                comments: [
                    'This is the first FROG',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
                ]
            },
            {
                author: 'John Doe',
                image: 'https://picsum.photos/500/500?2',
                comments: [
                ]
            }
        ]
    });
});
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});

// var raw = "";

// var requestOptions = {
//   method: 'POST',
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://frogsforever-bd829-default-rtdb.firebaseio.com/.json", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

