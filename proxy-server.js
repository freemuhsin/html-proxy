const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res) => {
    const url = `http://example.com${req.path}`; // Change 'example.com' to your target URL
    const options = {
        method: req.method,
        url: url,
        json: true,
        body: req.body,
        headers: req.headers
    };

    request(options, (error, response, body) => {
        if (error) {
            return res.status(500).send('Proxy error');
        }
        res.status(response.statusCode).send(body);
    });
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
