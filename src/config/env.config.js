import 'dotenv/config';

const configure = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
    database_uri: process.env.DATABASE_URI,
    cors_origin: process.env.CORS_ORIGIN,
    jwt_secret: process.env.JWT_SECRET,
};

const config = Object.freeze(configure);

export default config;
