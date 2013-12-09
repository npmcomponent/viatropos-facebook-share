
/**
 * Module dependencies.
 */

var open = require('open-window');

/**
 * Expose `share`.
 */

module.exports = share;

/**
 * Open facebook share in new window.
 *
 * @see https://developers.facebook.com/docs/plugins/share/
 */

function share(url, opts, fn) {
  if ('undefined' != typeof FB && arguments.length > 1) {
    // javascript sdk version.
    if ('function' == typeof opts) {
      fn = opts;
      opts = {};
    }

    opts.method = opts.method || 'feed';
    if (url) opts.link = opts.link || url;

    // opts.name;
    // opts.link;
    // opts.picture;
    // opts.caption;
    // opts.description;

    FB.ui(opts, function(res){
      if (res && res.post_id) {
        if (fn) fn(null, res);
      } else {
        if (fn) fn(res); // error
      }
    });
  } else {
    // simple version.
    return open('https://www.facebook.com/sharer/sharer.php?'
    + 'u=' + encodeURIComponent(url));
  }
}