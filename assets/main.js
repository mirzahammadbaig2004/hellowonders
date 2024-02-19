


$(document).ready(function () {
    $('.dropdown').hover(function () {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
    }, function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
    });
  });
    
    
    
    
    
    
    
    
    function validateForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var rating = document.querySelector('input[name="rating"]:checked');
    
      // Name validation
      if (!name) {
        alert("Name is required");
        return false;
      }
    
      // Email validation
      if (!email) {
        alert("Email is required");
        return false;
      } else if (!isValidEmail(email)) {
        alert("Invalid email format");
        return false;
      }
    
      // Message validation
      if (!message) {
        alert("Message is required");
        return false;
      }
    
      // Rating validation
      if (!rating) {
        alert("Rating is required");
        return false;
      }
    
      return true;
    }
    
    function isValidEmail(email) {
      // Very basic email validation, you might want to use a more comprehensive method
      var emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
