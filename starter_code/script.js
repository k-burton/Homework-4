
// Select the appropriate DOM elements with CSS selectors upon a user's click using the $.click() handler
// If a user clicks "Read More" on the primary column:
// have the text in the
// tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
//
// hide the "Read More" link using $.hide()
// If a user clicks "Read Less" on the primary column:
// have the
// slide up and hide the "Read Less" link using $.slideUp() and $.hide()
//
// show the "Read More" link using $.show()
// Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the inside that
// slide down and hide the "Learn More" link using $.slideDown() and $.hide()

// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
$(document).ready(function(){
  // console.log("apples");
  // Prevent a form submission with the event.preventDefault() function
  $('#bottom-cta').click(function() {
    // console.log("apples");
    event.preventDefault();
  });

  $('.readmore').click(function(){
    console.log("apples");
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('#show-this-on-click').show();
    $('.readless').show();
    $('.readmore').hide();
  });
  $('.readless').click(function(){
    event.preventDefault();
    $('#show-this-on-click').hide();
    $('#show-this-on-click').slideUp();
    $('.readmore').show();
    $('.readless').hide();
  });

  // show the "Read More" link using $.show()
  // Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the inside that
  // slide down and hide the "Learn More" link using $.slideDown() and $.hide()
  $('.learnmore').click(function(){
    console.log("oranges");
    event.preventDefault();
    $('#learnmoretext').slideDown();
    $('#learnmoretext').show();
  });


});
