needed.bind(function () {
  var donate = document.querySelector("#donate");
  donate.onclick = function () {
    var win = window.open('http://ko-fi.com/A680B9X', '_blank');
    win.focus();
  };

  var reset = document.querySelector("#reset");
  reset.onclick = function () {
    needed.useDefaultData();
    window.location.reload();
  };

  var about = document.querySelector("#about");
  var openabout = document.querySelector("#openabout");
  var closeabout = document.querySelector("#closeabout");
  openabout.onclick = function () {
    about.style.display = "block";
  };
  closeabout.onclick = function () {
    about.style.display = "none";
  };
});
