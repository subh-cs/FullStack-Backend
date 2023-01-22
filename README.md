# Backend server for the Fullstack appilcation

This is the part of a simple project where RESTful API that allows for CRUD (create, read, update, and delete) operations on a user resource.

## 🔗 Links
- Deployed link of the application => `https://full-stack-frontend-three.vercel.app`
- Github repo link of the fronted => `https://github.com/subh-cs/FullStack-Frontend`
- Deployed link of the backend server => `https://full-stack-backend-ebon.vercel.app`

## API Endpoints

- `GET /` - Dummy response
- `GET /user` - Retrieves all users
- `GET /send-mail` - send mail to all users in once
- `GET /search` - send the users based on search
- `POST /create-user` - Creates a new user
- `DELETE /delete-user` - Deletes a user
- `PATCH /update-user` - Updates a user

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js website](https://nodejs.org/en/)

### Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Setup the cors header at server.js
```bash
   origin: "http://localhost:3000"
```

