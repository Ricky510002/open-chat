let publidDir = __dirname + '/public';
 module.exports = {
  entry: [ 
     './src/index.jsx' 
   ], 
   output: { 
     path: publidDir, 
     publicPath: '/', 
     filename: 'bundle.js' 
   }, 
   module: { 
     rules: [{ 
       exclude: /node_modules/, 
       loader: 'babel-loader', 
       query: { 
        presets: ['react', 'es2015'] 
       }
     },
     { test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ] 
   }, 
   resolve: { 
     extensions: ['.js', '.jsx'] 
   }, 
   devServer: { 
     historyApiFallback: true, 
     contentBase: publidDir 
   } 
 }; 