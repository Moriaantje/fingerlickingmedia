var isOurWorkPage = document.getElementsByClassName('our-work');

if (isOurWorkPage.length > 0) {
  var slider = tns({
    "container":  '.our-work-slider',
    "items":      1,
    "speed":      600,
    "rewind":     true,
    "mouseDrag":  true,
    "touch":      true,
    "swipeAngle": false,
    "arrowKeys":  true
  });
}
