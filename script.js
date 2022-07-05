let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let firstname = id("firstname"),
   lastname = id("lastname"),
  email = id("email"),
  password = id("password"),
  form = id("form")
  errorMsg = classes("error"),
  failureIcon = classes("failure");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(firstname, 0, "First Name cannot be Empty");
    engine(lastname, 1, "Last Name cannot be Empty");
    engine(email, 2, "Email cannot be Empty");
    engine(password , 3, "Password cannot be Empty");
  });

  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      failureIcon[serial].style.opacity = "1"; 
      id.style.border = "2px solid red";
    }
    else {
      errorMsg[serial].innerHTML = "";
      failureIcon[serial].style.opacity = "0"; 
      id.style.border = "2px solid green";
      alert("Thank you for your visit user");
      return true;
    }
  }