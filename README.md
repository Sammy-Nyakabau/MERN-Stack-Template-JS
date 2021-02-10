<img src = "https://i.ibb.co/sJJBt5c/mern-stack.jpg">
<h1 align="center">MERN Stack Template--JS 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Sammy-Nyakabau/MERN-Stack-Template-JS/blob/main/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Sammy-Nyakabau/MERN-Stack-Template-JS/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A MERN Stack Template written in JavaScript. It is already equipped with backend services integration, logging errors, routing, validation techniques and authentication using  passport.js for social login. Redux is also used for state management. Furthermore, the backend is equipped with a MongoDB connection, Logging, Error Handling, Integration and Unit Testing, etc.

## :wrench: :hammer: Setup

Make sure to follow all these steps exactly as explained below. Do not miss any steps, or you won't be able to run this application.


### 📦 ENV Variables
- Create a .env file in then `/backend` folder and add the following

```env
  MONGO=your mongodb uri
  SESSION_SECRET=your express session secret
  GOOGLE_CLIENT_ID=your google client id
  GOOGLE_CLIENT_SECRET=your google client secret
  FACEBOOK_APP_ID=your facebook app id
  FACEBOOK_APP_SECRET=your facebook app secret
  CLIENT_HOME=your frontend uri
```
- Create a .env file in then `/frontend` folder and add the following

```env
  REACT_APP_API_URL=your api url
```
### ⬇️ Install the Dependencies 

Next, from the root folder, install the dependencies:

    cd backend
    npm install

    cd frontend
    npm install


### ✅ Run the tests
    
    cd backend
    npm test

    cd frontend
    npm test

### 🚀 Start the Server and the App 

    cd backend
    node index.js

    cd frontend
    npm start

## :open_file_folder: Directory Structure

```bash
 .
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── backend
│   ├── components
│   │   ├── feature
│   │   │   ├── feature.test.js
│   │   │   ├── featureController.js
│   │   │   ├── featureModel.js
│   │   │   └── featureRouter.js
│   │   └── user
│   │       ├── user.test.js
│   │       ├── userController.js
│   │       ├── userModel.js
│   │       └── userRouter.js
│   ├── index.js
│   ├── middleware
│   │   ├── async.js
│   │   ├── auth.js
│   │   ├── error.js
│   │   ├── validate.js
│   │   └── validateObjectIds.js
│   ├── package-lock.json
│   ├── package.json
│   └── startup
│       ├── cors.js
│       ├── db.js
│       ├── helmet.js
│       ├── logger.js
│       ├── passport.js
│       ├── routes.js
│       └── validation.js
└── frontend
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── components
        │   ├── App
        │   │   ├── App.css
        │   │   ├── App.js
        │   │   └── test.js
        │   ├── Feature
        │   │   ├── Feature.css
        │   │   ├── Feature.jsx
        │   │   ├── index.js
        │   │   └── test.js
        │   ├── Login
        │   │   ├── Login.css
        │   │   ├── Login.jsx
        │   │   ├── index.js
        │   │   └── test.js
        │   └── shared
        │       ├── ProtectedRoutes.jsx
        │       └── ScrollToTop.jsx
        ├── hoc
        │   └── withToolTip
        │       ├── index.js
        │       └── withToolTip.jsx
        ├── hooks
        │   ├── useDocumentTitle
        │   │   └── index.js
        │   └── useSemiPersistantState
        │       └── index.js
        ├── index.css
        ├── index.js
        ├── screens
        │   └── Home
        │       ├── Home.css
        │       ├── Home.jsx
        │       ├── index.js
        │       └── test.js
        ├── services
        │   ├── authService
        │   │   ├── index.js
        │   │   └── test.js
        │   ├── formatService
        │   │   ├── Currency
        │   │   │   ├── index.js
        │   │   │   └── test.js
        │   │   └── Date
        │   │       ├── index.js
        │   │       └── test.js
        │   ├── httpService
        │   │   ├── index.js
        │   │   └── test.js
        │   ├── logService
        │   │   └── index.js
        │   └── userService
        │       ├── index.js
        │       └── test.js
        └── store
            ├── api.js
            ├── configureStore.js
            ├── entities.js
            ├── feature.js
            ├── middleware
            │   ├── api.js
            │   ├── func.js
            │   ├── logger.js
            │   └── toast.js
            ├── reducer.js
            ├── tests
            │   ├── feature.spec.js
            │   └── user.spec.js
            └── user.js
```


## Author

👤 **Sammy Nyakabau**

* Website: www.sammynyakabau.com
* Github: [@Sammy-Nyakabau](https://github.com/Sammy-Nyakabau)
* LinkedIn: [@sammy-nyakabau](https://linkedin.com/in/sammy-nyakabau)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Sammy-Nyakabau/MERN-Stack-Template-JS/issues). You can also take a look at the [contributing guide](https://github.com/Sammy-Nyakabau/MERN-Stack-Template-JS/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Sammy Nyakabau](https://github.com/Sammy-Nyakabau).<br />
This project is [MIT](https://github.com/Sammy-Nyakabau/MERN-Stack-Template-JS/blob/main/LICENSE) licensed.

