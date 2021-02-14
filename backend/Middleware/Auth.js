const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        const token = req.header('x-auth-header');
        jwt.verify(token, 'iamheasyouareheasyouareme');
        next();
    } catch (error) {
        res.status(401).json({
            message: 'No token cannot authorize'
        });
    }
}