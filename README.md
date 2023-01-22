# Simple Chat #

In this project, you are going to create a simple chat application. 

You will be creating:

* A frontend React app where you can:
  - Edit a message and send it
  - View the history of sent messages
* A backend Express app which will:
  - Add a timeStamp to incoming messages
  - Broadcast each message to all connected clients

## Working through the project
Each step in the project is stored in a different branch, numbered from 0.0 to 8.6. You are currently in branch `main`, which shows the (current) final state of the project.

0. Run `git checkout 0.0-getting-started`
1. Read TASK.md to know what you need to work on in this step.
2. Create a new branch (`git checkout -b <your_branch_name>`) and make your changes there.
3. When you have finished, commit the changes to your branch.
4. At this point, you can checkout the next official branch and verify that your version has all the expected new features.
5. CHANGELOG.md will contain the list of all the changes made since the previous branch.
6. You can also run [`git diff`](https://www.toolsqa.com/git/git-diff/) to see a complete log of all changes since the beginning. (Press Shift-Q on your keyboard to exit the diff tool program.)
7. You can now create a new branch, using either your own work or the official branch as the starting point: `git checkout -b <new_branch_name> <starting_point_branch_name>`. For example:

   ```
   git checkout -b my1.0 1.0-react-message-component
   ```

8. Have fun!
---

## Long Polling
This project assumes that you are already familiar with the concept of sending a request to a backend API endpoint, and receiving an almost immediate reply.

In the first stages of the project, you will use a technique called [long polling](https://levelup.gitconnected.com/understand-and-implement-long-polling-and-short-polling-in-node-js-94334d2233f3). Instead of sending a reply to a poll request immediately, the backend will store the poll request's `response` object, and wait. When it later receives a new message request, it will use the stored poll `response` to reply to connected clients, with the message as the payload. 

The client will then immediately send a new poll request, in anticipation of the receiving data from the next incoming message request.

This technique allows _one_ client to send a message which _all_ connected clients then receive.

## WebSocket
Later in the project, you will be upgrading communications with the backend. The `ws` WebSocket module is more efficient than long polling in dealing with communications between the frontend and the backend. So you will be replacing the modules you created for long polling with modules that work with WebSocket.

Why start with long polling, if WebSocket is better?

It is important to design your code in a modular fashion. When the decision is made to adopt a new technique, you can simply replace existing modules with new ones that accept the same input and return the same output. Knowing that you will be adopting a new technique later will force you to work in a modular fashion.

## Project Phases
1. Set up the React client and the Express server to send and receive messages
2. Set up long polling, so connected clients can subscribe to all messages sent by any client
3. Modify the client to show all recent messages
4. Define users, and send specific messages to specific users
5. Store messages in a database, so that users can retrieve messages that were sent to them while they were offline
6. Define groups (or rooms) with selected users
7. Adding registration and login, to allow new users to join
8. Upgrade from long polling to WebSocket