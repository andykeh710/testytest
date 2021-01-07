// const fetchUsers = () => {
//     axios.get('https://reqres.in/api/users')
//         .then(response => {
//             const users = response.data.data;
//             console.log(`GET list users`, users);
//         })
//         .catch(error => console.error(error));
// };

// fetchUsers();

// var axios = require('axios');
// var data = '';

// var config = {
//   method: 'get',
//   url: 'https://frogsforever-bd829-default-rtdb.firebaseio.com/.json',
//   headers: { },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


////---------------  parses users and added to dom 

var createUserDiv = document.getElementById("create-user")
const appendToDOM = (users) => {
    const ul = document.querySelector('ul');
    //iterate over all users
    console.log("This is working")
    users.map(user => {
        ul.appendChild(createLi(user));
        createUserDiv.innerHTML += ul; 
        console.log(ul)
    });

};

const fetchUsers = () => {
    axios.get('https://frogsforever-bd829-default-rtdb.firebaseio.com/.json')
        .then(response => {
            return response.data})
        .then(result => {
            console.log(result)
            let objBreakout = Object.values(result)
            console.log(objBreakout)
            let pushArr = [] /// ARRAY OF IDs same index location as the array of objects above 
            for (id in result){
                pushArr.push(id)
            }
            console.log(pushArr)
            
            // const users = result.data.data;
            // console.log(`GET list users`, users);
            // // append to DOM
            // appendToDOM(users);
            // console.log(users)
        })
        .catch(error => console.error(error));
};

fetchUsers();


//================ post Req

const createUser = (user) => {
    axios.post('https://frogsforever-bd829-default-rtdb.firebaseio.com/.json', user)
        .then(response=> {
            return response.json()
        })
        .then(result => {
            const addedUser = result.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            appendToDOM([addedUser]);
        })
        .catch(error => console.error(error));
};

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;

    const user = { first_name, last_name };
    createUser(user);
});


///---------------------- DELETE 

const deleteUser = (elem, id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
        .then(response => {
            console.log(`DELETE: user is removed`, id);
            // remove elem from DOM
            elem.remove();
        })
        .catch(error => console.error(error));
};

// update the createLI and ad add onclick 
// const createLi = (user) => {
//     const li = document.createElement('li');
//     // add user details to `li`
//     li.textContent = `${user.id}: ${user.first_name} ${user.last_name}`;

//     // attach onclick event
//     li.onclick = e => deleteUser(li, user.id); 

//     return li;
// };

const createLi = (user) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.textContent = `${user.id}: ${user.first_name} ${user.last_name}`;
    return li;
};