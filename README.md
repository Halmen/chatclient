# A simple socket io client, vanilla js app

# It includes:
- socket io: v2.2.0
- Includes webpack HMR
- Webpack 4
- Es6 / Babel
- Webpack CSS loader / Style loader

# Summary:

A vanilla js app, built in React's functional component style. The app also uses      socket.io's client library. The app connects to a back end server, and communicates with it, by sending and receiving messages, through the app's UI.
The app's UI responsive, and should work on all resolution.

### First

Install deps from project root `yarn` or `npm i`

### Start development server with:
 `npm start`

It's possible to use a different port by specifying this first like so:

`CVA_PORT=7788 yarn start:dev` to start with port 7788. Same for npm just include `CVA_PORT=7788` at the beginning.

### Build for production

`yarn build` or `npm run build`
