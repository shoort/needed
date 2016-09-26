Needed.prototype.save = function () {
  localStorage.needed_data = JSON.stringify(this.data);
};

Needed.prototype.load = function (cb) {
  if (localStorage.needed_data) {
    this.data = JSON.parse(localStorage.needed_data);
    cb();
  } else this.useDefaultData(cb);
};

Needed.prototype.useDefaultData = function (cb) {
  var n = this;
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    n.data = JSON.parse(xhr.responseText);
    n.save();
    cb();
  }
  xhr.open('get', '/default.json');
  xhr.send();
};
