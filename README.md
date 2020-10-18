# back-end

## Deployed on **Heroku** [pintereach-app-api](https://pintereach-app-api.herokuapp.com/)

## Users Schema

#### When registering a user the minimum required is :

###### Request Body:
```
{
	email: “user@email.com“,
	username: “myusername“,
	password: “mypassword“
}
```

###### Returns:
```
{
    "data": {
        "id": 5,
        "email": "user@email.com",
        "username": "myusername",
        "password": "$2a$08$.pvTe3fjMLGNtESy7aFx3CuePN/nGJY1jPt5a8UpWLwUq"
    }
}
```

#### Axios call for registering a new user

`axios.post('http://herokuurl.herokuapp.com/register', newUser)`

#### When user logs in the minimum required is: 

###### Request Body:
```
{
	username: “myusername“,
	password: “mypassword“
}
```

###### Returns: 
```
{
    "message": “You are now logged in”,
    "token": “eyJhcCI6IkpXVCJ9.eyJ1c2Vyb5IiWMwNjg0NjF9.OIHYD8z_2oRGIQ7EfFw”
}
```

#### Axios call for logging in a user

`axiosWithAuth().post(‘http://herokuurl.herokuapp.com/login', credentials)`

## Board Schema

#### When posting a board the expected body is :

###### Request Body:
```
{
	name: “new board name”,
	category: "other”,
    description: “board desc”,
    user_id: 1
}
```

###### Returns: 
```
{
    "data": {
        "id": 1,
        "name": "new board name",
        "category": "other",
        "description": "board desc",
        "user_id": 1
    }
}
```

#### Axios call for requesting Articles (public)

`axios.get(‘https://pintereach-app-api.herokuapp.com/articles')`

## Endpoints

| Route | Method | Endpoint | Description | Required |
|-------|--------|----------|-------------|----------|
| **Articles** | GET | /articles | Returns a list of public articles | No token required |
| **Boards** | GET | /boards | Returns a list of boards in the database | Authentication with token |
|            | GET | /boards/user/:id | Returns boards of logged in user by user id | Authentication with token |
|            | GET | /boards/:id | Returns specified board by id | Authentication with token |
|            | POST | /boards | Adds a new board, returns the added board | Authentication with token |
|            | PUT | /boards/:id | Updates the specipecified board by id | Authentication with token |
|            | DELETE | /boards/:id | Deletes the specified board by id | Authentication with token |
| **Users**   | GET | /users | Returns a list of users in the database | Authentication with token |