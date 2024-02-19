// FOR DROPDOWN
  $(document).ready(function () {
    $('.dropdown').hover(function () {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
    }, function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
    });
  });
// FOR EMAIL VALIDATION

  function validateForm() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Email validation
    if (!email) {
      alert("Please fill out your email.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Message validation
    if (!message) {
      alert("Please fill out your message.");
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

