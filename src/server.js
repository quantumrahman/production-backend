import app from './app.js';
import dbConfig from './config/db.config.js';
import config from './config/env.config.js';

const server = async () => {
    try {
        const port = config.port || 5000;

        await dbConfig();

        app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

server();
