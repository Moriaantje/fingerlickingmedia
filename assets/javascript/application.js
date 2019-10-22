var isOurWorkPage = document.getElementsByClassName('our-work');

if (isOurWorkPage.length > 0) {
  var slider = tns({
    "container": '.our-work-slider',
    "rewind": true,
    "items": 1,
    "speed": 600
  });  
}
