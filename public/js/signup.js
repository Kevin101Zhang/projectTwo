$(document).ready(function () {
  $("#signUpSubmit").on("click", function () {
    event.preventDefault();

    console.log($("#uname").val().trim());
    console.log($("#psw").val().trim());

    if ($("#uname").val().trim() === "" || $("#psw").val().trim() === "") {
      alert("Username or Password is Blank");
      $("#uname").css("background-color", "pink");
      $("#psw").css("background-color", "pink");
      return null;
    }

    var newUser = {
      username: $("#uname").val().trim(),
      password: $("#psw").val().trim(),
    };

    $.post("/api/signUp/", newUser);
  })

  $("#loginSubmit").on("click", function () {
    event.preventDefault();

    console.log($("#loginuname").val().trim());
    console.log($("#loginpsw").val().trim());

    var checkUser = {
      username: $("#loginuname").val().trim(),
      password: $("#loginpsw").val().trim(),
    };

    console.log(checkUser);

    $.post("/api/login/", checkUser, function (err, res) {
      console.log(res);
      if (res === "success") {
        alert("Successful Login")
        // window.location.replace("../public/landingpage.html");
      } else {
        alert("Invalid Username or Password");
      }
    });

  })
});