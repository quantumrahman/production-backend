/* eslint-disable no-unused-vars */

import config from '../config/env.config.js';

const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal server error';

    res.status(statusCode).res.json({
        success: false,
        status: statusCode,
        message: message,
        stack: config.node_env === 'development' ? err.stack : null,
    });
};

export default errorMiddleware;
