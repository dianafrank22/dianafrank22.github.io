require('dotenv').config();

const logger        = require('morgan');
const express       = require('express');
const path          = require('path');
const bodyParser    = require('body-parser');
const project       = require('./routes/project')
const webpack       = require('webpack');
const config        = require('./webpack.config');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const app           = express();
const compiler      = webpack(config);
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;



// @TODO create routes for api calls here, that way they're done server side
// the requests on client side will 

app.use(express.static(path.join(__dirname, '/')))

app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/project', project)



if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/build'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
