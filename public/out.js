Needed.prototype.out = {
  line: function (stuff) {
    document.querySelector("#scroller").appendChild(stuff);
  },
  text: function (t) {
    var e = document.createElement("div");
    this.line(e);
    var n = 0;
    var f = setInterval(function () {
      if (n < t.length) {
        e.innerHTML += t.substring(n, n + 1);
        n++;
      } else clearInterval(f);
    }, needed.data.outspeed);
  },
  buttons: function (b, c) {
    var e = document.createElement("div");
    this.line(e);
    b.forEach(function (button) {
      var n = b.indexOf(button);
      var el = document.createElement("button");
      el.innerHTML = button;
      e.appendChild(el);
      e.appendChild(document.createTextNode(" "));
      el.onclick = function () {
        c(n);
        // TODO: disable all the buttons after one has been clicked
      };
    });
  }
};
