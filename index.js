const server = require('./api/server');

const PORT = process.env.PORT || 6600;

server.listen(PORT, () =>
    console.log(`\n** Server running on port ${PORT} **\n`)
);
