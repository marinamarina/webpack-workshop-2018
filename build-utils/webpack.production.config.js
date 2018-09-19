const webpack = require('webpack')

module.exports = () => ({
    output: {
        filename: "[chunkhash].js"
    }
});
