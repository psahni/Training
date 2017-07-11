
var myApp = { submit: false, errors : [] };

function validateEmail() {
  var form = document.getElementById('myForm');
  form.email.onkeydown = function(e) {
    if (!form.email.value.match(/[A-Za-z0-9]+@[A-Za-z]+\.[a-z0-9]/)) {
      document.getElementById('email_error').innerHTML = "Email is invalid";
    }
    else {
      document.getElementById('email_error').innerHTML = "";
    }
  };

}

window.onload = function() {
  validateEmail();
}

function validate() {
  myApp.errors = [];
  var form = document.getElementById('myForm');

  if (form.name.value.length == 0) {
    myApp.errors.push("Name can't be blank");
  }
  if (form.email.value.length == 0) {
    myApp.errors.push("Email can't be blank");
  }
  if (!form.email.value.match(/[A-Za-z0-9]+@[A-Za-z]+\.[a-z0-9]/)) {
    myApp.errors.push("Email is invalid");
  }
  if (form.password.value.length < 8) {
    myApp.errors.push("Minimum password length should be 8");
  }
  if(form.password.value.length && form.password.value != form.confirm_password.value) {
    myApp.errors.push("Password and confirmation password do not match")
  }

  if (!form.t_and_c.checked) {
    myApp.errors.push("Please accept terms and conditions");
  }
  myApp.submit = myApp.errors.length > 1 ? false : true;
};

function handleSubmit(e) {
  validate();
  if (myApp.submit) {
    return true;
  }
  else {
    var validateBlock = document.getElementById('validations');
    var html = '';

    myApp.errors.forEach(function(error) {
      html+="<li>";
      html+=error;
      html+="</li>";
    });

    var errorHtml = "<ul>" + html  + "</ul>";

    validateBlock.innerHTML = errorHtml;
    validateBlock.style.display = 'block';
    return false;
  }
}
