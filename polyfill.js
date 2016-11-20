String.prototype.repeatt = function(times) {
  var repeated = '';
  for (var i = 0; i < times; i++) {
    repeated = repeated + this;
  }
  return repeated;
};
