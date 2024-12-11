# User API Documentation

This API allows users to register, login, and manage authentication via JWT tokens. The routes handle user creation, login, and token management.

---

##  **Register User**

**Endpoint**: `POST /api/v1/users/register`

**Description**: This route allows a new user to register by providing their name, email, and password. Upon successful registration, a JWT token is generated and stored as an `httpOnly` cookie for authentication.

### Request Body

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

## Response
##### Success (201 Created)
```json
{
  "message": "User registered successfully",
  "user": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user",
    "createdAt": "2024-12-10T00:00:00.000Z",
    "updatedAt": "2024-12-10T00:00:00.000Z"
  },
  "token": "your.jwt.token"
}
```
#### Error (400 Bad Request)
```json
{
  "message": "User registration failed",
  "error": "User already exists"
}
```
---

##  **Login User**

**Endpoint**: `POST /api/v1/users/login`

**Description**: This route allows an existing user to login by providing their email and password. Upon successful login, a JWT token is generated and stored as an httpOnly cookie for authentication.


### Request Body
```json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```
## Response
#### Success (200 OK)

```json
{
  "message": "User logged in successfully",
  "user": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user",
    "createdAt": "2024-12-10T00:00:00.000Z",
    "updatedAt": "2024-12-10T00:00:00.000Z"
  },
  "token": "your.jwt.token"
}
```

##### Error (404 Not Found)
```json
{
  "error": "User not found"
}
```
##### Error (401 Unauthorized)
```json
{
  "error": "Invalid credentials"
}
```
---

##  **Get User Profile**

**Endpoint**: `GET /api/v1/user/profile`

**Description**: Fetches the user’s profile based on the authenticated user's token.

**Authentication**: Required (JWT Token in Cookies)

## Request
##### Headers:
`Content-Type`: `application/json`
`Cookie`: `token=<JWT Token>` (The JWT token must be sent in the request cookies.)

##### Response (Success)
```json
{
  "message": "User profile fetched successfully",
  "user": {
    "_id": "user_id",
    "name": "User Name",
    "email": "user@example.com",
    "avatar": {
      "public_id": "public_id",
      "url": "avatar_url"
    },
    "role": "user",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```
##### Response (Error)
```json
{
  "message": "User profile failed",
  "error": "User not authenticated"
}
```

---
##  **Get User Profile**

**Endpoint**: `GET /api/v1/user/logout`

**Description**: Logs out the user by clearing the JWT token from cookies.

**Authentication**: Required (JWT Token in Cookies)

## Request
##### Headers:
`Content-Type`: `application/json`
`Cookie`: `token=<JWT Token>` (The JWT token must be sent in the request cookies.)

##### Response (Success)
```json
{
  "message": "User logged out successfully"
}
```
##### Response (Error)
```json
{
  "message": "User logout failed",
  "error": "Error message describing what went wrong"
}
```

