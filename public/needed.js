var Needed = function () {
  this.bindings = [];
};

Needed.prototype.start = function (cb) {
  var n = this;
  n.load(function () {
    n.bindings.forEach(function (binding) {
      binding();
    });
    cb();
  });
};

// bind a function to be run at needed init.
Needed.prototype.bind = function (binding) {
  this.bindings.push(binding);
};

Needed.prototype.pointsAdd = function (n) {
  this.data.points += n;
  document.querySelector("#points").innerHTML = this.data.points;
};

var needed = new Needed();
