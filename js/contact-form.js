$(window).on("load", function() {
  "use strict";

  //  Contact Form Working Functionality

  $("#submit_3").on("click", function() {
    if (
      $("#username").val().length > 0 &&
      $("#email").val().length > 0 &&
      $("#phone").val().length > 0
    ) {
      console.log("button clicked", document.getElementById("username").value);
      $.ajax({
        type: "POST",
        crossOrigin: true,
        url: "https://crescon-server-995a8.firebaseapp.com/workwithus",
        //   contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {
          name: document.getElementById("username").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          position: document.getElementById("position").value,
          message: document.getElementById("description").value
        },
        success: result => {
          console.log(result);
        }
      });
      toastr.success(
        "Thank you for submitting your request. Allow us a week to get back to you."
      );
    } else {
      toastr.error("Please enter the required fields and then click again");
    }
    // testing

    // var errors = "";

    // var user_name = document.getElementById("username");
    // var contact_email_address = document.getElementById("email");
    // if(user_name.value === ""){
    //     errors+= 'Please provide your name.';
    // }
    // else if(contact_email_address.value === ""){
    //     errors+= 'Please provide an email address.';
    // }

    // if(errors)
    // {
    //     document.getElementById("error").style.display = "block";
    //     document.getElementById("error").innerHTML = errors;
    //     return false;
    // }

    // else{
    //     $.ajax({
    //         type: "POST",
    //         url: "process.php",
    //         data: $("#contact_form_3").serialize(),
    //         success: function(msg)
    //         {
    //             if(msg === 'success')
    //             {
    //                 document.getElementById("error").style.display = "none";
    //                 document.getElementById("username").value = "";
    //                 document.getElementById("email").value = "";
    //                 document.getElementById("description").value = "";
    //                      $("#contact_form_3").hide();
    //                 document.getElementById("success").style.display = "block";
    //                 document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
    //             }else{
    //                 document.getElementById("error").style.display = "block";
    //                 document.getElementById("error").innerHTML = "Oops! Something went wrong while prceeding.";
    //             }
    //         }

    //     });

    // }
  });
  $("#quote_submit").on("click", function() {
    if (
      $("#qusername").val().length > 0 &&
      $("#qemail").val().length > 0 &&
      $("#qphone").val().length > 0
    ) {
      console.log("button clicked", document.getElementById("username").value);
      $.ajax({
        type: "POST",
        crossOrigin: true,
        url: "https://crescon-server-995a8.firebaseapp.com/quote",
        //   contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {
          qname: document.getElementById("qusername").value,
          qemail: document.getElementById("qemail").value,
          qphone: document.getElementById("qphone").value,
          company: document.getElementById("comapny").value,
          work: document.getElementById("work").value,
          details: document.getElementById("details").value
        },
        success: result => {
          console.log(result);
        }
      });
      toastr.success(
        "Thank you for submitting your request. Allow us a week to get back to you."
      );
    } else {
      toastr.error("Please enter the required fields and then click again");
    }
  });
});
