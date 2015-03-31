'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/<%= _.slugify(appname) %>-dev'
  },

  seedDB: true,

  aws: {
    s3: {
      bucket: 'byteincoffee',
      prefixKey: '.tmp/'
    }
  }
};
