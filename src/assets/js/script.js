
var openForm = (function() {

  return {
    open: function() {
      document.getElementById("myForm").style.visibility = "visible";
      document.getElementById("myForm").style.opacity = "1";
    },

    hide: function() {
      document.getElementById("myForm").style.visibility = "hidden";
      document.getElementById("myForm").style.opacity = "0";
    },

    close: function() {
      document.getElementById("myForm").style.visibility = "hidden";
      document.getElementById("myForm").style.opacity = "0";      }
  }

})(openForm||{})



var LessMore=(function() {

  return{
    see: function() {

    // Get all the elements from the page
    let points =
    document.getElementById("points");

let showMoreText =
    document.getElementById("moreText");

let buttonText =
    document.getElementById("textButton");

// If the display property of the dots
// to be displayed is already set to
// 'none' (that is hidden) then this
// section of code triggers
if (points.style.display === "none") {

    // Hide the text between the span
    // elements
    showMoreText.style.display = "none";

    // Show the dots after the text
    points.style.display = "inline";

    // Change the text on button to
    // 'Show More'
    buttonText.innerHTML = "Show More +";
}

// If the hidden portion is revealed,
// we will change it back to be hidden
else {

    // Show the text between the
    // span elements
    showMoreText.style.display = "inline";

    // Hide the dots after the text
    points.style.display = "none";

    // Change the text on button
    // to 'Show Less'
    buttonText.innerHTML = "Show Less -";
}
}
    }
})(LessMore||{})



// var viewContent = (function() {

//   return {
//     view: function() {
//       let popoverTriggerList = [].slice.call(
//         document.querySelectorAll('[data-bs-toggle="popover"]'))

//       let popoverList =
//       popoverTriggerList.map(function (popoverTriggerEl) {
//         return new bootstrap.Popover(popoverTriggerEl)
//       })
//     }
//   }

// })(viewContent||{})








var webGlObject = (function() {

})(webGlObject||{})


























/* start of Latest News */
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// function currentSlide(n) {
// showSlides(slideIndex = n);
// }

// function showSlides(n) {
// let i;
// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot");
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";
// dots[slideIndex-1].className += " active";
// }
// /* End of Latest News */


