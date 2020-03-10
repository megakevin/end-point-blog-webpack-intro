const path = require('path');

module.exports = {
    mode: "development",
    entry : {
        index: "./src/index.js",
        admin: "./src/admin.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    }
};
