let loadedModule = null;

if (process.env.NODE_ENV === 'production') {
  loadedModule = require('./Root.prod.js');
} else {
  loadedModule = require('./Root.dev.js');
}

export const Root = loadedModule;