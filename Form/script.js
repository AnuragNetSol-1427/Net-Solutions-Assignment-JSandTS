function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  
    let y = document.getElementById("number").value;
    if (isNaN(y) || y.length < 10 || y.length > 10) {
      alert("Phone Number is not valid");
      return false;
    }
  
    let email = document.forms["myForm"]["email"].value;
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailformat) || email == "") {
      alert("You have entered an invalid email address!");
      return false;
    }
  }