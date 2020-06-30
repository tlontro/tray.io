# Take home exercise
---
### The exercise
Software Development Engineer in Test - Take Home Task
As part of the interview process you have been requested to complete a take home task. You will find everything you need below. If you have any questions please contact a member of the talent team.

Overview
At tray.io, we have multiple test suites: two browser automation suites using WebdriverIO, Cucumber, Selenium and an API test suite written in Typescript, using Jest and Request to make API calls. Those allow us to quickly check if everything still works correctly from a user's perspective after an update. One of your major responsibilities as a Software Development Engineer in Test will be to maintain and expand these frameworks.

The purpose of the current task is to assess your approach to UI test automation.

The Task
You are to create an E2E UI test that will validate that we're able to successfully add items to your basket and remove an item. Your automation must have the following broad steps:

1. Login to https://www.saucedemo.com/ using the "standard_user" account
2. Sort the products by Price (high to low)
3. Add the two cheapest products to your basket
4. Open the basket
5. Remove the cheapest product from your basket
6. Checkout
7. Finish on the page where you need to enter your name and postal code
Here's a walkthrough video demonstrating how this works: Video Link

Don't hesitate to reach out if you have any questions.

That's the specific user journey we want to see automated.

You should approach this task as if building the foundation of an entire E2E framework. Your test should live in a structure that's easy to understand and expand with additional tests. Without implementing everything, try to indicate as clearly as possible (using method stubs etc) how you intend to build it.

On the tech side: Your solution must be written in and run as a node.js application. This position will require you to write code for node.js in JavaScript or TypeScript and use npm or yarn etc. That's what we want to see in your solution.

Our suggestion is to use WebdriverIO (JavaScript bindings for Selenium) for the browser automation. But you are welcome to use other frameworks (e.g. Selenium, Cypress etc.) as long as it's JavaScript-based and open-source. You are free to use any other npm packages you want (including test frameworks such as mocha).

Please put your solutions in a git repository along with instructions on how to run. We should be able to clone and successfully run it locally using the provided instructions.

Assessment criteria
Demonstrated JavaScript or TypeScript and node.js knowledge (the more modern syntax the better!)
The test code is concise and easy to understand
The test effectively validates the intended functionality
The framework is well structured
The framework can be extended in an intuitive way

---
---
## Implementation

##### Dependencies:
node, chrome

#### Install Homebrew(MAC):
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

#### Make sure you have node installed:
`brew install node`

I'm using
`v11.8.0`

go to the root of the project and type:
`npm i`

Runnable Options:
`npm run linter`

`npm run test`

![](tray.gif)
