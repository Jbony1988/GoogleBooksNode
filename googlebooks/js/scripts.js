function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.name.value == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.name.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }

    // validation was successful
    return true;
  }



 function validateForm() {
      var searchButton = document.getElementById("searchButton").value;
      if ( searchButton === ""){
          alert("Enter a book name please");
          return false;
      }
  }
