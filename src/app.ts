import express from 'express';

const port = process.env.PORT ?? 8080;
const app = express();



function startServer() {
    app.listen(port, () => {
        console.log(`Server Listening to port: ${port}...`);
    });
}

startServer();
