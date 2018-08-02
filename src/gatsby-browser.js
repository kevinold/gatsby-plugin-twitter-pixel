exports.onRouteUpdate = function({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof twq === `function`) {
    twq('track', 'PageView');
  }
};
