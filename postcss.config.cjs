const autoprefixer = require('autoprefixer');
const easingGradients = require('postcss-easing-gradients');

const config = {
    plugins: [
        autoprefixer,
        easingGradients
    ],
};

module.exports = config;
