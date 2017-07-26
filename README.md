Start server:
npm run server

https://hashnode.com/post/simple-react-redux-app-civ45zywh03qdgc5327399ly0


Try CRUD
http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/

base url = https://reqres.in/api/users

"users": {
    url: "users?page=2",
    type: "get",
    data: null
},
"users-single": {
    url: "users/2",
    type: "get",
    data: null
},
"users-single-not-found": {
    url: "users/23",
    type: "get",
    data: null
},
"unknown": {
    url: "unknown",
    type: "get",
    data: null
},
"unknown-single": {
    url: "unknown/2",
    type: "get",
    data: null
},
"unknown-single-not-found": {
    url: "unknown/23",
    type: "get",
    data: null
},
"post": {
    url: "users",
    type: "post",
    data: {
        "name": "morpheus",
        "job": "leader"
    }
},
"put": {
    url: "users/2",
    type: "put",
    data: {
        "name": "morpheus",
        "job": "zion resident"
    }
},
"patch": {
    url: "users/2",
    type: "patch",
    data: {
        "name": "morpheus",
        "job": "zion resident"
    }
},
"delete": {
    url: "users/2",
    type: "delete",
    data: null
},
"register-successful": {
    url: "register",
    type: "post",
    data: {
        "email": "sydney@fife",
        "password": "pistol"
    }
},
"register-unsuccessful": {
    url: "register",
    type: "post",
    data: {
        "email": "sydney@fife"
    }
},
"login-successful": {
    url: "login",
    type: "post",
    data: {
        "email": "peter@klaven",
        "password": "cityslicka"
    }
},
"login-unsuccessful": {
    url: "login",
    type: "post",
    data: {
        "email": "peter@klaven"
    }
},
"delay": {
    url: "users?delay=3",
    type: "get",
    data: null
},
