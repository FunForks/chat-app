# Getting Started #

## Instructions

Copy and paste the following lines into your Terminal and press Enter:

```
npm install
cd backend && npm install
cd ../frontend && npm install
cd .. && npm start
```

This will create and populate `node_modules` directories in the root directory, the frontend directory and the backend directory. It should also launch both the backend and the frontend.

Ctrl-click on the localhost URLs below to check that everything is working.

* http://localhost:3000 should show a barebones Express backend

* http://localhost:3001 should show a barebones React frontend

In the future, you can simply use `npm start` from the root directory to restart the project.

## Details

* The backend is the boilerplate created with `npx express-generator backend`, plus:
  + CORS to allow a connection to any route from any source

* The frontend is a stripped down version of a project created with `npx create-react-app frontend`, plus:
  + REACT_APP_BACKEND is set to http://localhost:3000 in the "start" script for the frontend, to make it simple to connect to the backend
  + App.js fetches a string from an endpoint in the backend and displays it, as a proof of concept

* The parent directory uses the `kill-port` module so that the `npm start` script in the root directory can kill any processes currently using the ports 3000 and 3001. The frontend and backend can then use these ports with no problems.
