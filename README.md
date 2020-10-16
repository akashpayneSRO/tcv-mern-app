# tcv-mern-app

To do application with login.

API/BE (i.e. server.js)

- 2 routes (Posts, Users)
- Node
- Express
- Mongoose

Middleware

- passport

Client/FE

- React
- Redux

Database

- Mongodb

## API and database

So we will have two models:

Post:

- title
- body
- author
- date

User:

- username
- email
- password

> possible add created_at, updated_at and active if time.

Once the end points have been established, we can test via postman:

- Signup Endpoint — /api/users/signup
- Login Endpoint — /api/users/login
- Creating Post — /api/posts/create
- Edit Post — /api/posts/update/:id
- Fetch Post — /api/posts/
- Deleting Post — /api/posts/delete/:id

> On successful login, I received a token.

## Client

Will use create-react-app as it's the best for initialising react apps.

- Linters + prettier
- Bootstrap
- React
- Redux
- Sass

## Resources

[Atlas mongodb](https://docs.atlas.mongodb.com/getting-started/)
[Postman]()
[Concurrently](https://www.npmjs.com/package/concurrently)
[Create-react-app Proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development)
[Redux tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

```bash
Shortcuts
-----
imr - import React from 'react'
impt - import PropTypes from 'prop-types';
sfc - Stateless Function Component
imrc - import React, {Component} from 'react'
cc - Class Component
ccc - Class Component with Constructor
```
