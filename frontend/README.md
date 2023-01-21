# Barebones React App

This project was created using `npx create-react-app`, and then stripping out all unnecessary files. This leaves about:

* 1 KB of data in the `public/` and `src/` folders
* 40 KB in the hidden `.git` folder
* Over ***260 MB*** (yes, that's "megabytes") of boilerplate in the `node_modules/` folder.

## A starting point for all your new projects
Rather than running `npx create-react-app my-new-project-name` and waiting for all the latest node modules to be downloaded from the Internet, you can simply copy this folder to a new location and start developing as soon as the local copy process is finished.

## Notes concerning the GitHub repository
No `node_modules` files are stored on GitHub. All the information concerning the Node modules that need to be installed are found in `package.json`.

If you clone this repository from GitHub, then you'll need to run `npm install`, and wait while the Node modules are downloaded.

## First steps

0. Copy this folder to the directory where you want to work from. **Do not alter this original folder, so that you can use it again as the starting point for other projects.**
1. Rename the copied folder with the name of your project
2. Open `package.json` and change the value of the`"name"` property, to match your project's name
4. Open `public/index.html` and change the text in the title tag, to suit your project:
   ```
   <head>
    <title>App name?</title>
   </head>
   ```
5. Run `npm start` to see the placeholder app in the browser
6. Open `src/App.js` and start writing your own components
7. Replace this `README.md` file with a description of your own project

## Enjoy!