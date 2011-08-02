(function () {
  "use strict";

  var appCache = require('applicationCache')
    , location = require('location')
  //, Future = require('future')
  //, future = Future()
    ;

  function reload() {
    if (appCache.UPDATEREADY === appCache.status) {
      try {
        appCache.swapCache();
      } catch(e) {
        // Ignore
      }
    }

    location.reload();
  }

  // A nice, Node-esque on handler
  appCache.on = function (ev, cb) {
    appCache.addEventListener(ev, cb, false);
  };

  appCache.removeListener = function (ev, cb) {
    appCache.removeEventListener(ev, cb, false);
  };

  appCache.on('updateready', reload, false);
  // if we never `appCache.update()`, this will
  // only happen on pageload
}());
