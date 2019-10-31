document.getElementById('hamburger').addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById('navigation').classList.toggle("is-active");
  document.body.classList.toggle('has-overlay');
}, false);

if (document.getElementsByClassName('our-work').length > 0) {
  var slider = tns({
    "mode":       "gallery",
    "container":  '.our-work-slider',
    "items":      1,
    "speed":      600,
    "rewind":     true,
    "mouseDrag":  true,
    "touch":      true,
    "swipeAngle": false,
    "arrowKeys":  true,
    "controlsPosition": "bottom"
  });
}
