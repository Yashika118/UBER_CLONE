# Backend API Documentation 

## `/users/register` Endpoint

### Endpoint Description
The `/users/register` endpoint allows new users to register by providing their details, including their full name, email, and password. The endpoint validates the input data and creates a new user in the system.

---

### HTTP Method
`POST`

---

### Request Body Format
The request body must be sent in JSON format and include the following fields:

#### Required Fields
| Field               | Type   |Description                                     |
|---------------------|--------|------------------------------------------------|
| `fullname.firstname`| String | The first name of the user (min. 3 characters).|
| `fullname.lastname` | String | The last name of the user (optional).          |
| `email`             | String | The email address of the user (valid format).  |
| `password`          | String | The password for the user (min. 6 characters). |

#### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

---

### Response

#### Success Response
- **Status Code:** `201 Created`
- **Description:** The user has been successfully registered.
- **Response Body:**

```json
{
  "message": "User registered successfully",
  "token": "<auth_token>",
  "user": {
    "id": "<user_id>",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

1. **Validation Error:**
   - **Status Code:** `400 Bad Request`
   - **Description:** Input data is invalid.
   - **Response Body:**
   ```json
   {
     "errors": [
       { "msg": "Invalid email", "param": "email", "location": "body" },
       { "msg": "Password must be at least 6 characters long.", "param": "password", "location": "body" }
     ]
   }
   ```

2. **Missing Fields:**
   - **Status Code:** `400 Bad Request`
   - **Description:** Required fields are missing.
   - **Response Body:**
   ```json
   {
     "error": "All fields are required"
   }
   ```

3. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server.
   - **Response Body:**
   ```json
   {
     "error": "Internal server error"
   }
   ```

---

### Notes
- **Token Generation:** The response includes an authentication token for the user to access secure endpoints.
- **Error Handling:** All errors include a descriptive message to help debug issues.

---



---

## `/users/login` Endpoint

### Endpoint Description
The `/users/login` endpoint allows users to authenticate by providing their email and password. The endpoint validates the credentials and returns a token upon successful login.

---

### HTTP Method
`POST`

---


### Request Body Format
The request body must be sent in JSON format and include the following fields:

#### Required Fields
| Field   | Type   | Description                                     |
|---------|--------|-------------------------------------------------|
| `email` | String | The email address of the user (valid format).   |
| `password`| String | The password for the user (min. 6 characters).|

#### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

---

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Description:** User successfully logged in.
- **Response Body:**

```json
{
  "message": "Login successful",
  "token": "<auth_token>",
  "user": {
    "id": "<user_id>",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

1. **Validation Error:**
   - **Status Code:** `400 Bad Request`
   - **Description:** Input data is invalid.
   - **Response Body:**
   ```json
   {
     "errors": [
       { "msg": "Invalid email", "param": "email", "location": "body" },
       { "msg": "Password must be at least 6 characters long.", "param": "password", "location": "body" }
     ]
   }
   ```

2. **Invalid Credentials:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The email or password is incorrect.
   - **Response Body:**
   ```json
   {
     "message": "Invalid Email or Password"
   }
   ```

3. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server.
   - **Response Body:**
   ```json
   {
     "error": "Internal server error"
   }
   ```

---

### Notes
- **Token Generation:** The response includes an authentication token for secure access to protected resources.
- **Error Handling:** Descriptive error messages are provided to help debug issues.

---


## `/users/profile` Endpoint

### Endpoint Description
The `/users/profile` endpoint allows an authenticated user to fetch their profile information. This endpoint requires a valid authentication token.

---

### HTTP Method
`GET`

---

### Authentication
- This endpoint requires a valid JSON Web Token (JWT).
- Include the token in the `Authorization` header as a Bearer token or in a `jwt` cookie.

---

### Request Headers
| Header            | Value                   | Description                |
|--------------------|-------------------------|---------------------------|
| `Authorization`   | Bearer `<auth_token>`   | The JWT for authentication.|

---

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Description:** Successfully retrieved the user's profile.
- **Response Body:**

```json
{
  "user": {
    "id": "<user_id>",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

1. **Unauthorized User:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** The user is not authorized to access this endpoint (e.g., no valid token).
   - **Response Body:**
   ```json
   {
     "message": "Unauthorised User"
   }
   ```

2. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server.
   - **Response Body:**
   ```json
   {
     "error": "Internal server error"
   }
   ```

---

### Notes
- **Authorization Middleware:** This endpoint uses `authMiddleware` to verify and decode the JWT.
- **Secure Cookies:** If the token is stored in a cookie, ensure it is HTTP-only and secure to prevent XSS attacks.

---


## `/users/logout` Endpoint

### Endpoint Description
The `/users/logout` endpoint logs out an authenticated user by clearing their token and adding it to the blacklist. This prevents further use of the token for authentication.

---

### HTTP Method
`GET`

---

### Authentication
- This endpoint requires a valid JSON Web Token (JWT).
- The token can be sent as a Bearer token in the `Authorization` header or as a `jwt` cookie.

---

### Response

#### Success Response
- **Status Code:** `200 OK`
- **Description:** Successfully logged out the user.
- **Response Body:**

```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

1. **Unauthorized User:**
   - **Status Code:** `401 Unauthorized`
   - **Description:** No valid token was provided.
   - **Response Body:**
   ```json
   {
     "message": "Unauthorised User"
   }
   ```

2. **Internal Server Error:**
   - **Status Code:** `500 Internal Server Error`
   - **Description:** An error occurred on the server.
   - **Response Body:**
   ```json
   {
     "error": "Internal server error"
   }
   ```

---

### Notes
- **Blacklist Handling:** The token is stored in the blacklist collection to ensure it cannot be reused.
- **Token Clearing:** The `jwt` cookie is cleared on the client side.

---



