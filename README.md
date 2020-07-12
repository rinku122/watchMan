# WatchMan

> It is a full stack MERN contact manager app with React hooks, context & JWT authentication.It has a Node/Express/MongoDB REST API for contacts that uses JWT authentication. All contact endpoints are protected and each registered user has their own contacts.

View project [here](https://mysterious-plains-16845.herokuapp.com)

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI and Jwt secret

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
