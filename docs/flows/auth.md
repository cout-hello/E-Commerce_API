# Authentication API Flows

This document describes the request flow for all authentication-related APIs.

---

# 1. POST /auth/register

## Purpose

Create a new user account.

## Flow

```text
POST /auth/register
        ↓
Request Validation
        ↓
Are the request data valid?
        │
        ├── No → Return 400 Bad Request
        │
        └── Yes
              ↓
Database & Business Checks
              ↓
Is username already used?
Is email already used?
Is phoneNumber already used?
              │
              ├── Yes → Return 409 Conflict
              │
              └── No
                    ↓
              Hash Password
                    ↓
              Create User
                    ↓
              Return 201 Created
```

## Request Body

```json
{
  "name": "John",
  "username": "john123",
  "email": "john@example.com",
  "phoneNumber": "0500000000",
  "city": "Riyadh",
  "shippingAddress": "Example Street",
  "password": "password123"
}
```

## Validation

Check the request before querying the database.

- `name` exists
- `name` is a String
- `name` length is between 3 and 10
- `username` exists
- `username` is a String
- `username` length is between 3 and 10
- `email` exists
- `email` has a valid email format
- `phoneNumber` exists
- `phoneNumber` is a String
- `city` exists
- `shippingAddress` exists
- `password` exists
- `password` length is between 8 and 30

## Database & Business Checks

After request validation:

- Check whether `username` already exists.
- Check whether `email` already exists.
- Check whether `phoneNumber` already exists.

If any of them already exists:

```text
409 Conflict
```

## Password

Never store the raw password.

```text
Raw Password
     ↓
bcrypt
     ↓
Hashed Password
     ↓
Store Hash in Database
```

## Create User

Create the user using the validated data and hashed password.

`role` should use its schema default:

```text
user
```

The client should not be allowed to register itself as an admin.

## Success Response

```text
201 Created
```

Do not return the password.

---

# 2. POST /auth/login

## Purpose

Authenticate an existing user.

## Flow

```text
POST /auth/login
        ↓
Request Validation
        ↓
Are the request data valid?
        │
        ├── No → Return 400 Bad Request
        │
        └── Yes
              ↓
          Find User
              ↓
       Does User exist?
              │
              ├── No → Return 401 Unauthorized
              │
              └── Yes
                    ↓
            Get Password Hash
                    ↓
            bcrypt.compare()
                    ↓
          Is Password correct?
                    │
                    ├── No → Return 401 Unauthorized
                    │
                    └── Yes
                          ↓
                    Create Token
                          ↓
                    Return 200 OK
```

## Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## Validation

- `email` exists
- `email` has a valid format
- `password` exists
- `password` is a String

## Database & Business Checks

Find the user using the login identifier.

```text
email
  ↓
Find User
```

Because the User schema uses:

```js
select: false
```

for the password, explicitly request the password field when authenticating.

Conceptually:

```text
Find User
   +
Password Hash
```

## Password Check

```text
Request Password
       ↓
bcrypt.compare()
       ↓
Stored Password Hash
```

If the password does not match:

```text
401 Unauthorized
```

Do not reveal whether the email exists or the password was wrong.

## Token

After successful authentication:

```text
User authenticated
       ↓
Create authentication token
       ↓
Return token
```

The exact token implementation will be decided when we build the authentication layer.

## Success Response

```text
200 OK
```

Example:

```json
{
  "message": "Login successful",
  "token": "..."
}
```

---

# Authentication Error Flow

Authentication APIs should stop as soon as a required condition fails.

```text
Request
  ↓
Validation
  │
  └── Invalid → 400
  ↓
Database / Business Check
  │
  └── Invalid state → 409 / 401
  ↓
Business Operation
  │
  └── Failure → Appropriate Error
  ↓
Success Response
```

---

# Authentication Responsibility Map

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Model / Database
```

## Route

Defines the endpoint:

```text
POST /auth/register
POST /auth/login
```

## Controller

Responsible for:

- Receiving the request
- Calling the appropriate service
- Returning the response

## Service

Responsible for authentication business logic:

- Register user
- Check existing account data
- Hash password
- Login user
- Compare password
- Create authentication token

## User Model

Responsible for user data and user-specific model behavior.

Possible Mongoose methods will be decided during implementation.

Example candidate:

```text
User.comparePassword()
```

---

# Important Rules

## Rule 1 — Validate before unnecessary database queries

```text
Invalid Request
      ↓
Reject immediately
      ↓
No unnecessary database query
```

## Rule 2 — Database uniqueness is not request validation

`unique: true` protects the database through a unique index.

It does not replace application-level handling of duplicate values.

Therefore:

```text
Application Check
      +
Database Unique Index
      +
Duplicate Error Handling
```

## Rule 3 — Never store raw passwords

```text
password
   ↓
bcrypt
   ↓
hash
   ↓
database
```

## Rule 4 — Never return the password

The password field should remain excluded from normal queries and responses.

## Rule 5 — Registration cannot choose admin role

The default registration role is:

```text
user
```

Admin creation/management is a separate responsibility.
