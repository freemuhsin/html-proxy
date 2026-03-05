# HTML Proxy

## Overview
This is an HTML proxy that allows users to retrieve and manipulate HTML pages through a proxy server.

## Features
- Retrieves pages from the internet.
- Allows manipulation of HTML content.
- Supports various configurations and options.

## Installation
To install the HTML Proxy, clone the repository and install dependencies:

```bash
git clone https://github.com/freemuhsin/html-proxy.git
cd html-proxy
npm install
```

## Usage
To use the proxy, start the server using:

```bash
npm start
```

Then, access the proxy at `http://localhost:3000`.

## Configuration
You can configure the proxy by modifying the `config.json` file. The settings include:
- Port: The port the server runs on.
- Timeout: The timeout for HTTP requests.

## API Endpoints
- `GET /proxy?url=<url>`: Retrieve the HTML content of the specified URL.
- `POST /manipulate`: Send HTML content to manipulate and receive modified content.

## Contributing
Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.