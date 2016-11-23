'use strict';
module.exports = function() {

  var treasure = {
  };

  function _setValue(key, value) {
    treasure[key] = value;
    return treasure;
  }

  function _getValue(key) {
    if ( key in treasure ) {
      return treasure[key];
    } else {
      return null;
    }
  }

  return {
    setValue: _setValue,
    getValue: _getValue
  };
};