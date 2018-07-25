//  webpack.config.js 
module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        // Hace referencia al directorio donde se está ejecutando el script.
        path: '/app'
    }
};