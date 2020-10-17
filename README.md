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
	data: [
		{
			id: 1,
			email: “user@email.com"
			username: “myusername”
		}
	],
	message: “User created!”
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
	data: [
		{
			id: 1,
			username: “myusername”
		}
	],
	message: “User Logged in!”,
token: “ldfkiofklajfoinvrklaejih”
}
```

#### Axios call for logging in a user

`axiosWithAuth().post(‘http://herokuurl.herokuapp.com/login', credentials)`