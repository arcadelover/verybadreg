function getbacktoreg() { window.location.href = "registration.html";};

var caller = $("#scared");
var distanceMultiplier = 25;

function scare(event) {
  var centerX = caller.offset().left + caller.width() / 2;
  var centerY = caller.offset().top + caller.height() / 2;
  
  var distanceX = event.clientX - centerX;
  var distanceY = event.clientY - centerY;
  var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
  var newX = centerX - (distanceX / distance) * distanceMultiplier;
  var newY = centerY - (distanceY / distance) * distanceMultiplier;
  
  var width = caller.width();
  var height = caller.height();
  
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  
  if (newX + width > windowWidth) {
    newX = -width + 50;
  } else if (newX < 0) {
    newX = windowWidth - 50;
  }
  
  if (newY + height > windowHeight) {
    newY = -height + 50;
  } else if (newY < 0) {
    newY = windowHeight - 50;
  }
  
  caller.stop().animate({"left": newX + "px", "top": newY + "px"}, 0);
}

$(document).ready(function() {
  caller.on('mousemove', scare);
});