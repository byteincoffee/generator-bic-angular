'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "<%= _.slugify(appname) + '-secret' %>",<% if (filters.facebookAuth) { %>

  FACEBOOK_ID: 'app-id',
  FACEBOOK_SECRET: 'secret',<% } if (filters.twitterAuth) { %>

  TWITTER_ID: 'app-id',
  TWITTER_SECRET: 'secret',<% } if (filters.googleAuth) { %>

  GOOGLE_ID: 'app-id',
  GOOGLE_SECRET: 'secret',
<% } %>

  AWS_ID:     'app-id',
  AWS_SECRET: 'secret',

  ADMIN_NAME :      'Admin',
  ADMIN_EMAIL :     'admin@admin.com',
  ADMIN_PASSWORD :  'admin',

  MAILER_USER :     'admin@admin.com',
  MAILER_PASS :     'admin',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
