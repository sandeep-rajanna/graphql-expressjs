## GraphQL API API Reference


GraphQL API to fetch and update users

### API Endpoints

    http://localhost:8000/service/user


### Schema Definitions

#### User

```json
{
  "id": {
	"return": "number",
	"arguments": {}
  },
  "name": {
	"return": "string",
	"arguments": {}
  },
  "email": {
	"return": "string",
	"arguments": {}
  },
  "addresses": {
	"return": [
	  {
		"street": {
		  "return": "string",
		  "arguments": {}
		},
		"city": {
		  "return": "string",
		  "arguments": {}
		},
		"country": {
		  "return": "string",
		  "arguments": {}
		}
	  }
	],
	"arguments": {}
  }
}
```

#### UserType
```json
{
  "name": "string",
  "email": "string",
  "addresses": [
	{
	  "street": "string",
	  "city": "string",
	  "country": "string"
	}
  ]
}
```

#### Fetch list of Users

Fetch user id, name email


##### Query

    query users{
        id
        name
        email
    }

```bash
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ users { id name email } }" }' \
http://localhost:8000/service/user
```
[Try it now](http://localhost:3000/localDev.html?endpoint=http://localhost:8000/service/user)

200 OK

Successful operation

##### Response Example (200 OK)

```json
{
  "data": {
	"users": [
	  {
		"id": "integer",
		"name": "string",
		"email": "string"
	  }
	]
  }
}
```


Invoke Mutation
---------------

Markdown enabled description for operation

user:

[UserInput](#/definitions/UserInput)

(no description)

#### Example

##### Request Content-Types: application/json

##### Query

    mutation addUser($user: UserInput!){
      addUser(user: $user){
        id
        name
        email
      }
    }
    

##### Variables

    {
      "user": {
        "name": "string",
        "email": "string",
        "addresses": [
          {
            "street": "string",
            "city": "string",
            "country": "string"
          }
        ]
      }
    }
    

[Try it now](http://localhost:5000/graphql?query=mutation%20addUser(%24user%3A%20UserInput!)%7B%0D%0A%20%20addUser(user%3A%20%24user)%7B%0D%0A%20%20%20%20id%0D%0A%20%20%20%20name%0D%0A%20%20%20%20email%0D%0A%20%20%7D%0D%0A%7D)

200 OK

Successful operation

type

[User](#/definitions/User)

##### Response Content-Types: application/json

##### Response Example (200 OK)

    {
      "data": {
        "addUser": {
          "id": "integer",
          "name": "string",
          "email": "string"
        }
      }
    }