$(document).ready(function () {
  $('#contact').validate({
    debug: true,
    errorClass: 'alert alert-danger',
    errorLabelContainer: '#output-area',
    errorElement: 'div',
    //rules here define what is good for input
    //each start with the form input element Name
    rules: {
      name: {
        required: true
      },
      email: {
        email: true,
        required: true
      },
      message: {
        required: true,
        maxlength: 2000
      },
    },
    //error messages
    messages: {
      name: {
        required: "Name is a required field. Please provide a name."
      },
      email: {
        required: "Email is a required field. Please provide a valid email.",
        email: "Please provide valid email address."
      },

      message: {
        required: "Message is a required field. Please type some information.",
        maxlength: "Message is too long. Please provide a shorter message."
      },

    },
    submitHandler: function (form) {
      $("#contact").ajaxSubmit({
        type: "POST",
        url: $('#contact').attr('action'),
        success: function (ajaxOutput) {
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)

          if($(".alert-success").length >= 1) {
            $("#contact")[0].reset()

          }

        }

      })

    }

  })

})