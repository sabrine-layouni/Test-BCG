# HOW TO START

This guide will help you start the server using the provided JavaScript file. Follow the steps below to get started.

## Prerequisites

Before starting, make sure you have Node.js installed on your system. If not, you can download and install it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:sabrine-layouni/Test-BCG.git
   cd Test-BCG
   npm install

## Starting the server
1. Open a terminal or command prompt.
2. Navigate to the project directory:
   ```sh
   cd Test-BCG
3. Start the server by running the JavaScript file using Node.js:
   ```sh
   node server.js
  
## Testing the Server
1. You can test the server by simply enter url below :
   ```sh
   http://localhost:3000/main.html
2. For empty use case 'Aucun résultat trouvé', please uncomment this line below from script.js file :
   ```sh
   searchDemand(4); // uncomment to test empty result case
   // searchDemand(5); // uncomment to test a data result (default)

## Additional Notes
1. You can uncomment the line in server.js file
   ```sh
   // res.error(); to simulate an error case.

2. You can uncomment the line in server.js file
   ```sh
   // res.json({}); to simulate an empty result. (default)
