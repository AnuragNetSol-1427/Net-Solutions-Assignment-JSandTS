function validateForm() {
  // Here, if username is not filled then only it shows error
    let x = document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Here, if number is less or greater than 10 then only it shows error
    let y = document.getElementById("number").value;
    if (isNaN(y) || y.length < 10 || y.length > 10) {
      alert("Phone Number is not  or you have not filled Phone Number");
      return false;
    }
  
    // Here, if email is not valid then only it shows error
    let email = document.forms["myForm"]["email"].value;
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailformat) || email == "") {
      alert("You have entered an invalid email address or You not filled email");
      return false;
    }

    // Here, if password or confirm password is not match then only it shows error
    let password = document.forms["myForm"]["password"].value;
    let confirmPassword = document.forms["myForm"]["confirm_password"].value;
    if(password != confirmPassword){
      alert("You have entered wrong confirm password");
      return false;
    }

    // Here, if form is filled successfully then only it shows alert of success
    alert("Your form is filled successfully");
  }