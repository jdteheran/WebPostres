$(document).ready(function(){

  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 2000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
  });

  $('.slider').bxSlider();

  $("#post").click(function() {
    $(this).attr("class","active");
    $("#noso").removeClass();
    $("#ped").removeClass();
    $("#conta").removeClass();
  });

  $("#noso").click(function() {
    $(this).attr("class","active");
    $("#post").removeClass();
    $("#ped").removeClass();
    $("#conta").removeClass();
  });

  $("#ped").click(function() {
    $(this).attr("class","active");
    $("#post").removeClass();
    $("#noso").removeClass();
    $("#conta").removeClass();
  });

  $("#conta").click(function() {
    $(this).attr("class","active");
    $("#post").removeClass();
    $("#noso").removeClass();
    $("#ped").removeClass();
  });

  $("#logo").click(function() {
    $("#post").attr("class","active");
    $("#conta").removeClass();
    $("#noso").removeClass();
    $("#ped").removeClass();
  });

});
