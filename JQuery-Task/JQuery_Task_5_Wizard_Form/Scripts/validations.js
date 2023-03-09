var validator;
$(document).ready(() => {
  console.log("hi", $.validator.methods);

  validator = $form.validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
        maxlength: 10,
        alpha: true,
      },
      lname: {
        required: true,
        minlength: 3,
        maxlength: 10,
        alpha: true,
      },
      gender: "required",
      email: {
        required: true,
        email: true,
      },
      contact: {
        required: true,
        phone: true,
      },
      dob: {
        required: true,
        mustBorn: true,
        age: true,
      },
      about: { required: true, minlength: 3, maxlength: 250 },
      tos: "required",
    },
    messages: {
      fname: {
        required: "*First Name Is Mandatory",
        minlength: $.validator.format(
          "*First name Must be At Least of {0} Characters"
        ),
        maxlength: $.validator.format(
          "*First name Must be At Most of {0} Characters"
        ),
      },
      lname: {
        required: "*Last Name Is Mandatory",
        minlength: $.validator.format(
          "*Last name Must be At Least of {0} Characters"
        ),
        maxlength: $.validator.format(
          "*Last name Must be At Most of {0} Characters"
        ),
      },

      gender: "*Please Specify Gender",
      email: {
        required: "*Email Is Mandatory",
      },
      contact: {
        required: "*Contact No Is Mandatory",
      },
      dob: {
        required: "*Birthdate Is Mandatory",
      },
      about: {
        required: "*Please Enter Something About Yourself",
        minlength: $.validator.format(
          "*Description Must be At Least of {0} Characters"
        ),
        maxlength: $.validator.format(
          "*Description Must be At Most of {0} Characters"
        ),
      },
      tos: "*Must Agree With T&C ",
    },
    errorPlacement: function (error, element) {
      if (element.is(":radio") || element.is(":checkbox")) {
        error.appendTo(element.parent("div"));
      } else {
        error.insertAfter(element);
      }
    },
  });

  //   CUSTOM VALIDATION FUNCTIONS
  // email
  $.validator.addMethod(
    "email",
    function (value, elem) {
      return (
        this.optional(elem) ||
        /^[a-z,1-9,\.]+@[a-z,1-9]+\.[a-z,1-9]+$/.test(value)
      );
    },
    "*Please Enter a Valid Email"
  );

  // phone
  $.validator.addMethod(
    "phone",
    function (value, elem) {
      return this.optional(elem) || /^[1-9][0-9]{9}$/.test(value);
    },
    "*Please Enter a Valid Contact Number"
  );

  // mustBorn
  $.validator.addMethod(
    "mustBorn",
    function (value, elem) {
      const age = new Date().getTime() - new Date(value).getTime();
      if (age >= 0) {
        return true;
      } else {
        return false;
      }
    },
    "*You Haven't Born Yet"
  );

  // age
  $.validator.addMethod(
    "age",
    function (value, elem) {
      const age = new Date().getTime() - new Date(value).getTime();
      if (age >= 568025136000 && age <= 1893417120000) {
        return true;
      }
      return false;
    },
    "*Age Must Be Between 18 & 60"
  );

  //   alpha
  $.validator.addMethod(
    "alpha",
    function (value, elem) {
      const tester = /^[a-z]+$/i;
      return tester.test(value);
    },
    "Only Alphabets Are Allowed"
  );
});
