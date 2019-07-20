$(window).on("load", () => {
  "use strict";

  $("#quote_submit").on("click", () => {
    console.log("quote clicked");
    if (
      $("#qusername").val().length > 0 &&
      $("#qemail").val().length > 0 &&
      $("#work").val().length > 0 &&
      $("#details").val().length > 0
    ) {
      $.ajax({
        type: "POST",
        crossOrigin: true,
        url: "https://crescon-server-995a8.firebaseapp.com/quote",
        //   contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {
          name: document.getElementById("qusername").value,
          email: document.getElementById("qemail").value,
          phone: document.getElementById("qphone").value,
          company: document.getElementById("company").value,
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
