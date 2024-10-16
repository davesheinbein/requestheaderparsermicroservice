# Request Header Parser Microservice

This is a simple full-stack JavaScript microservice that returns information about the client's request, such as their IP address, preferred language, and system information. The project is built with [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/), and is part of the freeCodeCamp curriculum for Back End Development and APIs.

## Live Demo

You can check out the live demo of the project here:  
**[Request Header Parser Microservice](https://3000-freecodecam-boilerplate-frluit0o0nf.ws-us116.gitpod.io/api/whoami)**

## Project Features

This microservice provides the following information about the client's request:

- **IP Address**: The IP address from which the request originated.
- **Language**: The preferred language of the client, extracted from the `Accept-Language` HTTP header.
- **Software**: Information about the operating system and browser, extracted from the `User-Agent` HTTP header.

## Example Usage

To use this microservice, you can make a GET request to the following endpoint:

```
[Base URL]/api/whoami
```

For example:

```
https://3000-freecodecam-boilerplate-frluit0o0nf.ws-us116.gitpod.io/api/whoami
```

## Example Output

The API responds with a JSON object that contains the following information:

```json
{
  "ipaddress": "::ffff:159.20.14.100",
  "language": "en-US,en;q=0.5",
  "software": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) (Node package manager)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/davesheinbein/requestheaderparsermicroservice.git
```

2. Navigate into the project directory:

```bash
cd request-header-parser-microservice
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following environment variable:

```bash
PORT=3000
```

5. Start the server:

```bash
npm start
```

The application will run locally on `http://localhost:3000`.

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A fast and minimalist web framework for Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

## Acknowledgements

This project is part of the [Back End Development and APIs](https://www.freecodecamp.org/learn/back-end-development-and-apis/) certification on freeCodeCamp.

By [David Sheinbein](https://davidsheinbeinengineer.com/)

