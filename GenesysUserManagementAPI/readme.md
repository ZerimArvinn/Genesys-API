<h1>Genesys REST API</h1>

<p>This API is a basic User Management System. It will allow the creation, deletion, update of user objects and also contains a login endpoint.<p>

The Schema for a User object is as follows.

{
    id: int,
    name: String,
    email: String,
    password: String,
    lastLogin: Date
}


<h2>ENDPOINTS</h2>

<h3>CREATE USER Endpoint -- "/api/v1/users/signup"</h3>

<p>example POST Request to http://localhost:3000/api/v1/users/signup 
body {
    name: Elon Musk,
    email: elon@tesla.com,
    password: TSLA
}

response: "User Created Successfully"</p>


<h3>LOGIN USER Endpoint -- "/api/v1/users/login"</h3>

<p>Example POST Request to http://localhost:3000/api/v1/users/login 
body {
    email: test@mail.com,
    password: testpassword
}

response: "User logged in" or "Password incorrect"</p>


<h2>GET ALL USERS -- "/api/v1/users/login"</h2>

<h3>Example GET request to http://localhost:3000/api/v1/users</h3>

<p>response: [
    {
        "id": "1",
        "name": "Elon Musk",
        "email": "elon@tesla.com",
        "password": "TSLA",
        "lastLogin": "3-13-21"
    },
    {
        "id": "2",
        "name": "testName",
        "email": "test@gmail.com",
        "password": "testPassword",
        "lastLogin": "3-12-21"
    }
]</p>


<h2>Get User By ID -- "/api/v1/users/:id"</h2>

<h3>Example GET request to http://localhost:3000/api/v1/users/1</h3>
<p>
response: {
    "id": "1",
    "name": "Elon Musk",
    "email": "elon@tesla.com",
    "password": "TSLA",
    "lastLogin": "3-13-21"
}
</p>

<h2>Edit user by id -- "/api/v1/users/:id"</h2>

<h3>Example POST request to http://localhost:3000/api/v1/users/1</h3>
<p>
body {
    "name": "bill gates",
    "password": "microsoft"
}
response: User Updated {
    "id": "1",
    "name": "bill gates",
    "email": "elon@tsla.com",
    "password": "TSLA",
    "lastLogin": "3-13-21"
}</p>


<h2>Delete user by id -- "/api/v1/users/:id</h3>

<p>Example DELETE request to http://localhost:3000/api/v1/users/1</p>

response: User Deleted Successfully
