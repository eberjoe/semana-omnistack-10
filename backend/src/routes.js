const { Router } = require('express');

const routes = Router();

routes.post('/devs', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Man 2' });
});

module.exports = routes