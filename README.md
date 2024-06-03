## Automated test E2E and API

## E2E 

## Folder Structure

The workspace contains an important folder:

- `cypress`: the folder to maintain all the cypress suite

Subfolder:
- `e2e`: where all the test cases (specs) are located
- `fixures`: where all the data to be used for the test cases is located
- `reports`: every cypress run, saves its results in this folder
- `support`: in this folder you can create your custom commands and configure how the e2e execution can be made. 

> If you want to customize the cypress behavior, open `cypress.config.json` and update the related settings there.

## Development

1. Install dependencies: npm install
2. Install cypress locally: npm install --save-dev cypress 
3. Install mochawesome reports: npm i mochawesome

## Testing

Testing can be done locally using production websites only running cypress. There are two ways:

1. npx cypress open: With this command cypress opens a web browser which allows:
    
   - i. Check every test case execution and debug them.
   - ii. Create new test cases here. 
   - iii. Modify cypress configuration.
   - iv. Configure and check cypress cloud
   - v. Choose the browser to run your tests
   - vi. Choose if are going to run e2e or component tests.
   - vii. Update cypress
    
2. npx cypress run: With this command cypress runs in headless mode and create the reports at the end of the execution.

## Additional commands

1. --headless --browser chrome: Allows to run cypress tests in headless mode using chrome as default browser (by default is electron)


