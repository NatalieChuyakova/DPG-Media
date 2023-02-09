# THIS IS FOR MAC ONLY

# Make sure node.js is installed
Check if it's being installed:
node -v or node –version

if not (using brew):
brew update
brew install node
---------------------------------
Using init command

The easiest way to get started with Playwright Test is to run the init command.

# Run from your project's root directory
npm init playwright@latest
# Or create a new project
npm init playwright@latest new-project
This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

Manually

Add dependency and install browsers.

npm i -D @playwright/test
# install supported browsers
npx playwright install

# to run test in a headed mode
npx playwright test test.spec.js --headed 

# to enable/disable a browser that you would like to run your tests 
check playwright.config.js